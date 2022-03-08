const typeScriptRouter = require("express").Router();

const SnippetTypeSript = require("../../../database/models/SnippetTypeScript");
const {
  loadRandomSnippetController,
  createSnippetController,
  editSnippetController,
} = require("../../controllers/snippets/snippetsControllers");

typeScriptRouter.get(loadRandomSnippetController(SnippetTypeSript));
typeScriptRouter.post(
  "/create-typescript",
  createSnippetController(SnippetTypeSript)
);
typeScriptRouter.patch(
  "/edit-typescript",
  editSnippetController(SnippetTypeSript)
);

module.exports = typeScriptRouter;
