import server from "../src/server";
import { getBlockRange, getProgram } from "../src/db/db-queries";
import { getHeightCached } from "../src/db/cached-db-queries";
import { JSONRPC } from "json-rpc-2.0";

jest.mock("../src/db/db-queries", () => ({
  getHeight: jest.fn(),
  getBlockRange: jest.fn(),
  getProgram: jest.fn()
}));
jest.mock("../src/db/cached-db-queries", () => ({
  getHeightCached: jest.fn()
}));
jest.mock("../src/faucet", () => ({
  runFaucet: jest.fn()
}))

describe("getHeight", () => {
  it("calls getHeight method", async () => {
    await server.receive({
      jsonrpc: JSONRPC,
      id: 0,
      method: "latest/height"
    });
    
    expect(getHeightCached).toHaveBeenCalled();
  });
});

describe("getBlocks", () => {
  it("calls getBlocks method with passed in params", async () => {
    const start = 0;
    const end = 2;
    await server.receive({
      jsonrpc: JSONRPC,
      id: 0,
      method: "blocks",
      params: {
        startHeight: start,
        endHeight: end
      }
    });

    expect(getBlockRange).toHaveBeenCalledWith(start, end);
  });
});

describe("program", () => {
  it("calls getProgram method with passed in params", async () => {
    await server.receive({
      jsonrpc: JSONRPC,
      id: 0,
      method: "program",
      params: {
        id: 'credits.aleo'
      }
    });

    expect(getProgram).toHaveBeenCalledWith('credits.aleo');
  });
});