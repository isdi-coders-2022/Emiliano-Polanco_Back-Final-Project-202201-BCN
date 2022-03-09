const typeScriptRouter = require("express").Router();

const { validate } = require("express-validation");
const SnippetTypeScript = require("../../../database/models/SnippetTypeScript");
const {
  loadRandomSnippetController,
  createSnippetController,
  editSnippetController,
} = require("../../controllers/snippets/snippetsControllers");
const joiSnippet = require("../../middlewares/joySchemas/joySnippetSchema");
const snippetLanguageValidator = require("../../middlewares/snippetLanguageValidator");

typeScriptRouter.get("", loadRandomSnippetController(SnippetTypeScript));
typeScriptRouter.post(
  "/create",
  validate(joiSnippet),
  snippetLanguageValidator("TypeScript"),
  createSnippetController(SnippetTypeScript)
);
typeScriptRouter.patch("/edit", editSnippetController(SnippetTypeScript));

module.exports = typeScriptRouter;
