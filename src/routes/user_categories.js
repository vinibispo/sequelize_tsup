const { Router } = require("express");
const usersCategoriesController = require('../controllers/user_categories')

const router = Router()

router.get('/', usersCategoriesController.index)
router.post('/', usersCategoriesController.create)

module.exports = router
