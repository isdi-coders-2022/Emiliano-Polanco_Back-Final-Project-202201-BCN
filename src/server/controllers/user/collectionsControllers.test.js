const {
  collectionUserSnippetsController,
} = require("./collectionsControllers");

describe("Given a createSnippetController", () => {
  describe("When it receives a request with a dangerous payload ", () => {
    test("It should call next method with an error", async () => {
      const nextMock = jest.fn();
      const req = {
        userId: new Error(),
      };
      await collectionUserSnippetsController(req, "res", nextMock);

      expect(nextMock).toHaveBeenCalled();
    });
  });
});
