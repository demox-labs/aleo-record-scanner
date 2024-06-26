import { getAllRecords, getHeight, getProgram, getSerialNumberData, getTransactionFee } from "../../src/db/db-queries";
import { saveBlocks } from "../../src/db";
import { writeKnexDB } from "../../src/db/knexDb";
import { Blocks } from "../data/test-blocks";
import { Blocks as TransferBlocks } from "../data/test-blocks-transfers";
import { Blocks as DeployBlocks } from "../data/test-block-deploy";
import { Blocks as ExternalBlocks } from "../data/test-block-external";
import { Blocks as FailedBlocks } from "../data/test-block-failed";
import { Blocks as RejectedBlocks } from "../data/test-block-rejected";
import { Blocks as DeployPrivacyPrideBlock } from "../data/test-block-deploy-privacy-pride-v3";
import { Blocks as DeployMikeNft } from "../data/test-block-deploy-mike-nft-test-2";
import { Blocks as DeployToken } from "../data/test-block-deploy-arc20-token";
import { Blocks as AddNFTBlocks } from "../data/test-block-add-nft";
import { Blocks as ConvertNFTPrivateToPublicBlocks } from "../data/test-block-nft-private-to-public";
import { Blocks as TransferNFTPublicBlocks } from "../data/test-block-nft-transfer-public";
import { NFTData, TokenEditionHash } from "../../src/db/db-interfaces";

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

xdescribe("getAllRecords", () => {
  beforeAll(async () => {
    await saveBlocks([TransferBlocks[0]]);
  });

  afterAll(async () => {
    // remove all data inserted into the explorer.block table
    await writeKnexDB.raw(`
      TRUNCATE explorer.block CASCADE;
    `);
  });

  it("returns all records", async () => {
    const records = await getAllRecords(2593, 2594);

    expect(records.length).toBe(3);
  });
});

xdescribe("getSerialNumberData", () => {
  beforeAll(async () => {
    await saveBlocks(TransferBlocks);
  });

  afterAll(async () => {
    // remove all data inserted into the explorer.block table
    await writeKnexDB.raw(`
      TRUNCATE explorer.block CASCADE;
    `);
  });

  it("returns all serial numbers", async () => {
    const serialNumberInfo = await getSerialNumberData([
      "6483628371757783060775107718123858286361638754258194309710416735499754712387field", // transfer_private
      "3830514163883342162829965687556759187040361780340925159955377079710027188903field" // fee
    ]);

    expect(serialNumberInfo.length).toBe(2);
  });
});

xdescribe("deploy transactions", () => {
  beforeAll(async () => {
    await saveBlocks(DeployBlocks);
  });

  afterAll(async () => {
    // remove all data inserted into the explorer.block table
    await writeKnexDB.raw(`
      TRUNCATE explorer.block CASCADE;
    `);
  });

  it("getProgram returns a program", async () => {
    const program = await getProgram('helloworld_1lalhk.aleo');

    expect(program).toBeTruthy();
  });

  it('there should be a fee associated with the deployment', async () => {
    const fee = await getTransactionFee('at18m370y85j7kzfnruzgzv5r5ya3c2dd3cww9mfdc25ts89jvlwyzsq2uhu9');
    expect(fee).toBe("25802000");
  });

  it('the serial number from the fee should exist', async () => {
    const serialNumber = "828486515505601099236982869469296721336812410525355383884107131234714607610field";
    const serialNumberData = await getSerialNumberData([serialNumber]);
    expect(serialNumberData.length).toBe(1);
  });

  it('getRecords should include fee output record', async () => {
    const records = await getAllRecords(1578, 1579);
    expect(records.length).toBe(1);
    expect(records[0].record_ciphertext).toBe('record1qyqsqp7ryh6fzw24n04qcvy3l664009yxkcyl64kfr9atxax8uesgzcvqyxx66trwfhkxun9v35hguerqqpqzqqypvr0u3wcvqhlla04mxtwflgetk4w20hznm7v2304q27atxg7zz8kdh5w8jfuj8lcm5tczmdu3u205twh36ukfzgzauy8tf4tzk0qz3vsvnd')
  });

  it('getRecords returns function_name and output_index', async () => {
    const records = await getAllRecords(1578, 1579);
    expect(records[0].function_name).toBe('fee');
    expect(records[0].output_index).toBe(0);
  });
});

xdescribe("external record transactions", () => {
  beforeAll(async () => {
    await saveBlocks(ExternalBlocks);
  });

  afterAll(async () => {
    // remove all data inserted into the explorer.block table
    await writeKnexDB.raw(`
      TRUNCATE explorer.block CASCADE;
    `);
  });

  it('input external records should be included', async () => {
    const inputCommitment = await writeKnexDB.column('commitment')
      .select()
      .from('explorer.transition_input_external_record')
      .first();
    const outputCommitment = await writeKnexDB.column('commitment')
      .select()
      .from('explorer.transition_output_external_record')
      .first();

    expect(inputCommitment.commitment).toBe('1966784642566126849188377811063756880802384329670323420947928152166514056775field');
    expect(outputCommitment.commitment).toBe('625705733131296434609121127316340107836444796758817385574018292765522432921field');
  });
});

xdescribe("failed transactions", () => {
  beforeAll(async () => {
    await saveBlocks(FailedBlocks);
  });

  afterAll(async () => {
    // remove all data inserted into the explorer.block table
    await writeKnexDB.raw(`
      TRUNCATE explorer.block CASCADE;
    `);
  });

  it('blocks should be included', async () => {
    const blockHeight = await getHeight();
    expect(blockHeight).toBe(149129);
  });

  it("records should exist from fee", async () => {
    const records = await getAllRecords(149127, 149130);
    expect(records.length).toBe(2);
  });
});

xdescribe('save rejected transaction', () => {
  beforeAll(async () => {
    await saveBlocks(RejectedBlocks);
  });

  afterAll(async () => {
    // remove all data inserted into the explorer.block table
    await writeKnexDB.raw(`
      TRUNCATE explorer.block CASCADE;
    `);
  });
  it('saves it', () => {
    // Just checking that the saving works. The data is not checked.
  })
});

xdescribe('add nft blocks', () => {
  beforeAll(async () => {
    await saveBlocks(DeployPrivacyPrideBlock)
    await saveBlocks(AddNFTBlocks);
  });

  afterAll(async () => {
    // remove all data inserted into the explorer.block table
    await writeKnexDB.raw(`
      TRUNCATE explorer.block CASCADE;
    `);
  });

  it('updates nft_token_edition_hash_to_nft_data', async () => {
    const rows = await writeKnexDB.select()
      .from<NFTData>('explorer.nft_token_edition_hash_to_nft_data')
      .where('token_edition_hash', '6281613818945482350858479786592172389901697546857156772235332030476616928837field')
    
    expect(rows.length).toBe(1);
    const nftData = rows[0]
    expect(nftData.transition_id).toBe('au1d85cxn0x0rvkzpt04ygg5px44yptwjanx2aydc3q8nvx9q8pv5gsqn7awp');
    expect(nftData.edition).toBe('0scalar');
    const decoder = new TextDecoder('utf-8');
    expect(decoder.decode(nftData.token_id)).toBe("{\n  data1: 68051203934329215081013893164492747376u128,\n  data2: 121424956763700u128\n}")
  })
});

xdescribe('convert nft from private to public', () => {
  beforeAll(async () => {
    await saveBlocks(DeployPrivacyPrideBlock)
    await saveBlocks(ConvertNFTPrivateToPublicBlocks);
  });

  afterAll(async () => {
    // remove all data inserted into the explorer.block table
    await writeKnexDB.raw(`
      TRUNCATE explorer.block CASCADE;
    `);
  });

  it('updates nft_address_to_token_edition_hash', async () => {
    const ownedHashInfo = await writeKnexDB.select()
      .from<TokenEditionHash>('explorer.nft_address_to_token_edition_hash')
      .where('aleo_address', 'aleo1kf3dgrz9lqyklz8kqfy0hpxxyt78qfuzshuhccl02a5x43x6nqpsaapqru')
      .first();
      
    expect(ownedHashInfo?.aleo_address).toBe('aleo1kf3dgrz9lqyklz8kqfy0hpxxyt78qfuzshuhccl02a5x43x6nqpsaapqru');
    expect(ownedHashInfo?.token_edition_hash).toBe('839173193555727319557840248991322390374827080280522862216840994896302905382field');
    expect(ownedHashInfo?.transition_id).toBe('au1jz8ajt8cg96acnjd6vtw3079y3lrwr87hwhgh6cp97jyvs5v5uxs5rak3a');
  });
});

xdescribe('transfer nft public', () => {
  beforeAll(async () => {
    await saveBlocks(DeployMikeNft)
    await saveBlocks(TransferNFTPublicBlocks);
  });

  afterAll(async () => {
    // remove all data inserted into the explorer.block table
    await writeKnexDB.raw(`
      TRUNCATE explorer.block CASCADE;
    `);
  });

  it('updates nft_address_to_token_edition_hash', async () => {
    const ownedHashInfo = await writeKnexDB.select()
      .from<TokenEditionHash>('explorer.nft_address_to_token_edition_hash')
      .where('aleo_address', 'aleo14rwswfzqwmtym372kd2amu7jzw6xmkz38gwdg9j6thv9g544kvgqhxu2s2')
      .first()

    expect(ownedHashInfo?.aleo_address).toBe('aleo14rwswfzqwmtym372kd2amu7jzw6xmkz38gwdg9j6thv9g544kvgqhxu2s2');
    expect(ownedHashInfo?.token_edition_hash).toBe('5739192633594176724072851683100316636335711563104507067029102821195631019074field');
    expect(ownedHashInfo?.transition_id).toBe('as1trte04az655mcgeqa7p9a074c4h72fy5pwpyla9v5jfse4szkggs0g65gz');
  });
});

xdescribe('deploy token program', () => {
  beforeAll(async () => {
    await saveBlocks(DeployToken)
  });

  afterAll(async () => {
    // remove all data inserted into the explorer.block table
    await writeKnexDB.raw(`
      TRUNCATE explorer.block CASCADE;
    `);
  });

  it('should properly mark the program as a token program', async () => {
    const program = await writeKnexDB.select('program_type')
      .from('explorer.program')
      .where('program_id', 'arc20_token.aleo')
      .first();

    expect(program).toBeTruthy();
    expect(program.program_type).toBe('token');
  });
});