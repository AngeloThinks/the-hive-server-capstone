// const request = require("supertest")("https://stormy-peak-72241.herokuapp.com");
const request = require("supertest")("http://localhost:8000");
const expect = require("chai").expect;

describe("GET /services", function () {
  it("returns all books on end database", async function () {
    const response = await request.get("/services");

    expect(response.status).to.eql(200);
  });
});
