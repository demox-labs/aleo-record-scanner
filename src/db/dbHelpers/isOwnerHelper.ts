
import { FieldMath } from './fieldMath';
import { 
  convertCiphertextToDataView, 
  isOwnerPublic, 
  getNonce, 
  convertBytesToFieldElement,
  getPublicOwnerBytes,
  getPrivateOwnerBytes
 } from './recordParser';

interface IsOwnerParams {
  nonceX: string;
  nonceY: string;
  recordOwnerX: string;
  isOwnerPublic: boolean;
}

export const getIsOwnerParams = (ciphertext: string): IsOwnerParams => {
  const fieldMath = new FieldMath();
  const dataView = convertCiphertextToDataView(ciphertext);

  const ownerPublic = isOwnerPublic(dataView);
  const ownerBytes = ownerPublic ? getPublicOwnerBytes(dataView) : getPrivateOwnerBytes(dataView);
  const ownerField = convertBytesToFieldElement(ownerBytes);

  // No need to calculate nonce if owner is public
  if (ownerPublic) {
    return {
      nonceX: '',
      nonceY: '',
      recordOwnerX: ownerField,
      isOwnerPublic: ownerPublic
    }
  }

  const nonceField = getNonce(dataView);
  const nonceGroup  = fieldMath.getPointFromX(nonceField);

  return {
    nonceX: nonceGroup.x.toString(),
    nonceY: nonceGroup.y.toString(),
    recordOwnerX: ownerField,
    isOwnerPublic: ownerPublic
  }
}