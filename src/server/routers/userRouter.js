const userRouter = require("express").Router();
const {
  collectionUserSnippetsController,
} = require("../controllers/user/collectionsControllers");

userRouter.get("/snippets", collectionUserSnippetsController);

module.exports = userRouter;
