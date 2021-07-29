const UserCategory = require('../models/user_category')
class UserCategoryController {
  async index(req, res) {
    const user_categories = await UserCategory.findAll()
    return res.json(user_categories)
  }
  async create(req, res) {
    const {userId, categoryId} = req.body
    const user_category = await UserCategory.create({userId, categoryId}, {include: [{association: 'users'}, {association: 'categories'}]})
    return res.json({...user_category, categories: user_category.categories, users: user_category.users })
  }
}

module.exports = new UserCategoryController()
