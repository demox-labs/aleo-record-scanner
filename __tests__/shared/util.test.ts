import { Blocks } from '../data/test-blocks';
import { getCoinbaseReward } from "../../src/shared/util";

describe("getCoinbaseReward", () => {
  it("correctly calculates coinbase reward", () => {
    const block = Blocks[1];
    const previousBlock = Blocks[3];

    const height = block.header.metadata.height;
    const previousTimestamp = previousBlock.header.metadata.last_coinbase_timestamp;
    const timestamp = block.header.metadata.timestamp;

    const coinbaseReward = Number(getCoinbaseReward(height, previousTimestamp, timestamp));
    expect(coinbaseReward).toEqual(1);
  });
});