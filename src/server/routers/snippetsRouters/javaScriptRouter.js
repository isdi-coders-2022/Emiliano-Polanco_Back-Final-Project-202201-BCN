const { validate } = require("express-validation");
const javaScriptRouter = require("express").Router();
const SnippetJavaScript = require("../../../database/models/SnippetJavaScript");
const {
  loadRandomSnippetController,
  createSnippetController,
  editSnippetController,
} = require("../../controllers/snippets/snippetsControllers");
const joiSnippet = require("../../middlewares/joySchemas/joySnippetSchema");
const snippetLanguageValidator = require("../../middlewares/snippetLanguageValidator");

javaScriptRouter.get("", loadRandomSnippetController(SnippetJavaScript));
javaScriptRouter.post(
  "/create",
  validate(joiSnippet),
  snippetLanguageValidator("JavaScript"),
  createSnippetController(SnippetJavaScript)
);
javaScriptRouter.patch("/edit", editSnippetController(SnippetJavaScript));

module.exports = javaScriptRouter;
