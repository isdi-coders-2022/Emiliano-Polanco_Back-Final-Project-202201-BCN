const { validate } = require("express-validation");
const javaScriptRouter = require("express").Router();
const SnippetJavaScript = require("../../../database/models/SnippetJavaScript");
const {
  loadRandomSnippetController,
  createSnippetController,
  editSnippetController,
  deleteSnippetFromUserCollection,
} = require("../../controllers/snippets/snippetsControllers");
const joiSnippet = require("../../middlewares/joySchemas/joySnippetSchema");
const snippetLanguageValidator = require("../../middlewares/snippetLanguageValidator");
const { tokenValidator } = require("../../middlewares/tokenValidator");

javaScriptRouter.get("", loadRandomSnippetController(SnippetJavaScript));
javaScriptRouter.post(
  "/create",
  tokenValidator,
  validate(joiSnippet),
  snippetLanguageValidator("JavaScript"),
  createSnippetController(SnippetJavaScript)
);
javaScriptRouter.patch(
  "/edit",
  tokenValidator,
  editSnippetController(SnippetJavaScript)
);
javaScriptRouter.delete(
  "/delete",
  tokenValidator,
  deleteSnippetFromUserCollection(SnippetJavaScript)
);

module.exports = javaScriptRouter;
