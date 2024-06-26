import request from "supertest";

import app from "../src/app";

jest.mock("../src/faucet", () => ({
  runFaucet: jest.fn()
}))

describe("PING", () => {
  it("responds with 200 status", async () => {
    const response = await request(app).get("/ping");

    expect(response.status).toBe(200);
  });
});