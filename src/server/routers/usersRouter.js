const usersRouter = require("express").Router();
const { validate } = require("express-validation");
const {
  loginController,
  registerController,
} = require("../controllers/user/credentialsControllers");
const joiUser = require("../middlewares/joySchemas/joyUserSchema");

usersRouter.post("/login", loginController);
usersRouter.post("/register", validate(joiUser), registerController);

module.exports = usersRouter;
