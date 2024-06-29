import { getHeight } from "../../src/db/db-queries";
import { saveBlocks } from "../../src/db";
import { writeKnexDB } from "../../src/db/knexDb";
import { Blocks } from "../data/test-blocks";

jest.mock("../../src/shared/aleo-program", () => ({
  extractProgramName: jest.fn().mockReturnValue('some_program.aleo'),
  getProgramType: jest.fn().mockReturnValue('untyped'),
}));

describe("getHeight", () => {
  afterEach(async () => {
    // remove all data inserted into the explorer.block table
    await writeKnexDB.raw(`
      TRUNCATE explorer.block CASCADE;
    `);
  });

  // example db integration test
  it("responds with latest height block", async () => {
    await saveBlocks(Blocks);

    const blockHeight = await getHeight();
    
    expect(blockHeight).toBe(3);
  });
});