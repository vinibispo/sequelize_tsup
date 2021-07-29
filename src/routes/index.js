const { Router } = require("express");
const router = Router();
const userRouter = require("./users");
const transactionsRouter = require('./transactions')
const categoriesRouter = require('./categories')
const userCategoriesRouter = require('./user_categories')
router.use('/users/:id/transactions', transactionsRouter)
router.use('/categories', categoriesRouter)
router.use("/users", userRouter);
router.use('/user_categories', userCategoriesRouter)


module.exports = router;
