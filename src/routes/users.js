const { Router } = require("express");

const usersController = require("../controllers/users");
const userRouter = Router();

userRouter.get("/", usersController.index);

userRouter.get("/:id", usersController.show);

module.exports = userRouter;
