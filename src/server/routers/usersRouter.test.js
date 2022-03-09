const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { default: mongoose } = require("mongoose");
const connectDataBase = require("../../database");
const User = require("../../database/models/User");
const app = require("../index");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const connectionString = mongoServer.getUri();
  await connectDataBase(connectionString);
});

beforeEach(async () => {
  User.create({
    name: "emiliano",
    lastname: "polanco",
    username: "emilio",
    email: "emilianopolanco5@gmail.com",
    password: "$2b$10$wu1A2PgtaMPps7h01duPeeJN3wicJ.PjOhzwdWqFagwAn3MhxW9oq",
  });
});

afterEach(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("Given and /users/login endpoint", () => {
  describe("When it gets a request with the right credentials", () => {
    test("Then it should reply with a token", async () => {
      const rightCredentials = {
        username: "emilio",
        password: "pass123",
      };

      const {
        body: { token },
      } = await request(app).post("/users/login").send(rightCredentials);

      expect(token).toBeTruthy();
    });
  });
});

describe("Given an /users/register endpoint", () => {
  describe("when it gets a reques with the right data", () => {
    test("Then it should reply with a token", async () => {
      const rightUserData = {
        name: "emiliano",
        lastname: "polanco",
        username: "anotherEmilio",
        email: "gbaster5@gmail.com",
        password: "pass123",
      };

      const {
        body: { token },
      } = await request(app).post("/users/register").send(rightUserData);

      expect(token).toBeTruthy();
    });
  });
});
