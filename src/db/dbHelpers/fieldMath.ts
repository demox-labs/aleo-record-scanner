import { CurveFn, twistedEdwards } from "@noble/curves/abstract/edwards";
import { sha512 } from '@noble/hashes/sha512';
import { Field, IField } from "@noble/curves/abstract/modular";
import { randomBytes } from "crypto";
import { ALEO_FIELD_MODULUS, EDWARDS_A, EDWARDS_D, SUBGROUP_CHARACTERISTIC } from "./aleoConstants";

export class FieldMath {
  customEdwards: CurveFn;
  aleoFieldOrder: bigint;
  subgroupCharacteristic: bigint;
  aleoA: bigint;
  aleoD: bigint;
  Fp: IField<bigint>;

  constructor() {
    // printed out the Edwards_a coefficient
    this.aleoA = EDWARDS_A;
    // printed out the edwards_d coefficient
    this.aleoD = EDWARDS_D;
    this.aleoFieldOrder = ALEO_FIELD_MODULUS;
    this.Fp = Field(ALEO_FIELD_MODULUS, undefined, true);
    this.customEdwards = this.instantiateCustomEdwards();
    this.subgroupCharacteristic = SUBGROUP_CHARACTERISTIC;
  }

  getPointFromX = (x_field: bigint): { x: bigint, y: bigint } => {
    // Compute y^2 = (a - x^2) / (1 + d * x^2) mod F (a = -1 for aleo (or 1 less than the field size))

    const xSquared = this.Fp.sqr(x_field);

    const numerator = this.Fp.sub(this.Fp.mul(this.aleoA, xSquared), BigInt(1));
    const denominator = this.Fp.sub(this.Fp.mul(this.aleoD, xSquared), BigInt(1));
    const ySquared = this.Fp.mul(numerator, this.Fp.inv(denominator));
    const y = this.Fp.sqrt(ySquared);

    const aleoEdwards = this.customEdwards;

    // Create the point object
    const topPoint = aleoEdwards.ExtendedPoint.fromAffine({ x: x_field, y: y });

    // modulus of the bls12-377 subgroup Scalar Field
    const multipliedTopPoint = topPoint.multiplyUnsafe(this.subgroupCharacteristic).toAffine();

    if (multipliedTopPoint.x === BigInt(0) && multipliedTopPoint.y === BigInt(1)) {
      return topPoint;
    } else {
      const negY = this.Fp.neg(y);
      return aleoEdwards.ExtendedPoint.fromAffine({ x: x_field, y: negY });
    }
  }
  
  adjustScalarBytes(bytes: Uint8Array): Uint8Array {
    // Section 5: For X25519, in order to decode 32 random bytes as an integer scalar,
    // set the three least significant bits of the first byte
    bytes[0] &= 248; // 0b1111_1000
    // and the most significant bit of the last to zero,
    bytes[31] &= 127; // 0b0111_1111
    // set the second most significant bit of the last byte to 1
    bytes[31] |= 64; // 0b0100_0000
    return bytes;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  uvRatio(u: bigint, v: bigint): { isValid: boolean; value: bigint } {
    // pray that this is not used
    // Has not been an issue with gpu benchmarking so far
    throw new Error('Not implemented');
  }
  
  instantiateCustomEdwards = (): CurveFn => {
    // https://github.com/AleoHQ/snarkVM/blob/testnet3/curves/src/edwards_bls12/parameters.rs#L45
    const aleoCofactor = BigInt(4);
    // big int representations of https://github.com/AleoHQ/snarkVM/blob/testnet3/curves/src/edwards_bls12/parameters.rs#L43
    const aleoGeneratorX = BigInt('1540945439182663264862696551825005342995406165131907382295858612069623286213');
    const aleoGeneratorY = BigInt('8003546896475222703853313610036801932325312921786952001586936882361378122196');
    const aleoDef = {
      // Param: a
      a: this.aleoA,
      // Equal to -121665/121666 over finite field.
      // Negative number is P - number, and division is invert(number, P)
      d: this.aleoD,
      // Finite field 𝔽p over which we'll do calculations; 2n ** 255n - 19n
      Fp: this.Fp,
      // Subgroup order: how many points ed25519 has
      // 2n ** 252n + 27742317777372353535851937790883648493n;
      // not taken from aleo, don't know what this is
      n: ALEO_FIELD_MODULUS,
      // Cofactor
      h: aleoCofactor,
      // Base point (x, y) aka generator point
      Gx: aleoGeneratorX,
      Gy: aleoGeneratorY,
      hash: sha512,
      // pray we don't need this
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      randomBytes: (randomBytes as any),
      // or this
      adjustScalarBytes: this.adjustScalarBytes,
      // dom2
      // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
      // Constant-time, u/√v
      uvRatio: this.uvRatio,
    } as const;
  
    return twistedEdwards(aleoDef)
  }
}