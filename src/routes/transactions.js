const { Router } = require("express");

const findUser = require('../middlewares/find_user.js')
const transactionsController = require("../controllers/transactions");
const transactionRouter = Router({mergeParams: true});

transactionRouter.use(findUser)
transactionRouter.get("/", transactionsController.index);

transactionRouter.post("/", transactionsController.create);
transactionRouter.put("/:transaction_id", transactionsController.update);
transactionRouter.get("/:transaction_id", transactionsController.show);
transactionRouter.delete("/:transaction_id", transactionsController.destroy);

module.exports = transactionRouter;
