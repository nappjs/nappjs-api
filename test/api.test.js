const napp = require("nappjs")();
const path = require("path");
const supertest = require("supertest");

let test = null;

describe("api", () => {
  before(async () => {
    napp.addMiddleware("test", path.join(__dirname, "../index"));
    await napp.load();
    test = supertest(napp.locals.api);
  });

  it("should create endpoint", () => {
    return test.get("/").expect(404);
  });
});
