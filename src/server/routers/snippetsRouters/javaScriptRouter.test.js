const { MongoMemoryServer } = require("mongodb-memory-server");
const { default: mongoose } = require("mongoose");
const request = require("supertest");
const connectDataBase = require("../../../database");
const SnippetJavaScript = require("../../../database/models/SnippetJavaScript");
const app = require("../../index");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const connectionString = mongoServer.getUri();

  await connectDataBase(connectionString);
});

beforeEach(async () => {
  await SnippetJavaScript.create({
    language: "JavaScript",
    textCode: `i am a big piece of code`,
    title: "start an express server",
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("Given a /javascript endpoint", () => {
  describe("When it receives a get petition", () => {
    test("Then it should reply with a random javaScript object", async () => {
      const { body } = await request(app).get("/javascript");

      expect(body).toHaveProperty("language");
    });
  });
});

describe("Given a /javascript/create", () => {
  describe("When it receives a post petition with a code snipped", () => {
    test("Then it should asnwer with the given snippet", async () => {
      const codesnippet = {
        language: "JavaScript",
        textCode: `const startServer = (app, port) =>\r\n  new Promise((resolve, reject) => {\r\n    const server = app.listen(port, () => {\r\n      debugs up in http://localhost:$");\r\n      resolve();\r\n    });\r\n\r\n    server.on("error", (error) => {\r\n      debug("Oh no the server couldnt start"`,
        title: "snippet express",
      };
      const { body } = await await request(app)
        .post("/javascript/create")
        .send(codesnippet)
        .expect(201);

      expect(body.language).toBe("JavaScript");
      expect(body.title).toBe("snippet express");
    });
  });
});
