const generalRouter = require("express").Router();
const {
  loginController,
  registerController,
} = require("../controllers/user/credentialsControllers");

generalRouter.post("", loginController);
generalRouter.post("/register", registerController);

module.exports = generalRouter;
