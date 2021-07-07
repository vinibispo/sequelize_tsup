const { Router } = require("express");

const usersController = require("../controllers/users");
const userRouter = Router();

userRouter.get("/", usersController.index);

userRouter.post("/", usersController.create);
userRouter.put("/:id", usersController.update);
userRouter.get("/:id", usersController.show);
userRouter.delete("/:id", usersController.destroy);

module.exports = userRouter;
