const { Router } = require("express");
const router = Router();
const userRouter = require("./users");
const transactionsRouter = require('./transactions.js')
router.use('/users/:id/transactions', transactionsRouter)
router.use("/users", userRouter);


module.exports = router;
