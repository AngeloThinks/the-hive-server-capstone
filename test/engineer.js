const request = require("supertest")(`"http://localhost:${PORT}"`);
//add heroku db or mongodb
const expect = require("chai").expect;

describe("GET /engineer", function () {
  it("returns all books on end database", async function () {
    const response = await request.get("/engineer");

    expect(response.status).to.eql(200);
  });
});
