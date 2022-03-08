const userRouter = require("express").Router();
const { validate } = require("express-validation");
const {
  loginController,
  registerController,
} = require("../controllers/user/credentialsControllers");
const joiUser = require("../middlewares/joySchemas/joyUserSchema");

userRouter.post("/login", loginController);
userRouter.post("/register", validate(joiUser), registerController);

module.exports = userRouter;
