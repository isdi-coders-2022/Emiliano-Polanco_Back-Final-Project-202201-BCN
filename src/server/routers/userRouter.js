const userRouter = require("express").Router();
const validator = require("express-joi-validation").createValidator({});
const {
  loginController,
  registerController,
} = require("../controllers/user/credentialsControllers");
const joiUser = require("../middlewares/joySchemas/joyUserSchema");

userRouter.post("/login", loginController);
userRouter.post("/register", validator.query(joiUser), registerController);

module.exports = userRouter;
