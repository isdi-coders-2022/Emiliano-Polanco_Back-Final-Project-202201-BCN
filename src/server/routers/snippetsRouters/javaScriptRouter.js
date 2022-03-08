const javaScriptRouter = require("express").Router();
const SnippetJavaScript = require("../../../database/models/SnippetJavaScript");
const {
  loadRandomSnippetController,
  createSnippetController,
  editSnippetController,
} = require("../../controllers/snippets/snippetsControllers");

javaScriptRouter.get("", loadRandomSnippetController(SnippetJavaScript));
javaScriptRouter.post("/create", createSnippetController(SnippetJavaScript));
javaScriptRouter.patch("/edit", editSnippetController(SnippetJavaScript));

module.exports = javaScriptRouter;
