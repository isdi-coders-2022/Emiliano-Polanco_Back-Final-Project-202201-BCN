const snippetRouter = require("express").Router();
const {
  loadRandomJavaScriptSnippetController,
  createJavaScriptSnippetController,
} = require("../controllers/snippets/snippetsControllers");

snippetRouter.get("/javascript", loadRandomJavaScriptSnippetController);
snippetRouter.post("/create-javascript", createJavaScriptSnippetController);

module.exports = snippetRouter;
