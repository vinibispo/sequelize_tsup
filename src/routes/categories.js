const { Router } = require("express");
const categoryController = require('../controllers/categories')

const router = Router()

router.get('/', categoryController.index)
router.get('/:id', categoryController.show)
router.post('/', categoryController.create)
router.put('/:id', categoryController.update)
router.delete('/:id', categoryController.destroy)
module.exports = router
