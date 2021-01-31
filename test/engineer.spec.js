const knex = require("knex");
const app = require("../src/app");

describe("Engineer API:", function () {
  let db;
  let engineers = [
    {
      first_name: "chemistry",
    },
    {
      first_name: "math",
    },
    {
      first_name: "english",
    },
    {
      first_name: "physics",
    },
    
  ];

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: 'postgresql://angelovazquez@localhost/hiveapi-test',
    });
    app.set("db", db);
  });

  before("cleanup", () => db.raw("TRUNCATE TABLE engineers RESTART IDENTITY CASCADE;"));

  afterEach("cleanup", () =>
    db.raw("TRUNCATE TABLE engineers RESTART IDENTITY CASCADE;")
  );

  after("disconnect from the database", () => db.destroy());

  describe("GET all engineers", () => {
    beforeEach("insert some engineers", () => {
      return db("engineers").insert(engineers);
    });

    //relevant
    it("should respond to GET `/engineers` with an array of engineers and status 200", function () {
      return supertest(app)
        .get("/engineers")
        .expect(200)
        .expect((res) => {
          expect(res.body).to.be.a("array");
          expect(res.body).to.have.length(engineers.length);
          res.body.forEach((item) => {
            expect(item).to.be.a("object");
            expect(item).to.include.keys("id", "first_name");
          });
        });
    });
  });

});