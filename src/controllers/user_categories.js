const UserCategory = require("../models/user_category");
const Category = require("../models/category.js");
const User = require("../models/user.js");
class UserCategoryController {
  async index(req, res) {
    const user_categories = await UserCategory.findAll();
    return res.json(user_categories);
  }
  async create(req, res) {
    try {
      const { userId, categoryId } = req.body;
      const user = await User.findByPk(userId);
      const category = await Category.findByPk(categoryId);
      console.log(category, "category");
      debugger;
      const x = "";
      const user_category = await category.addUser(user);
      return res.json({
        ...user_category,
        category: user_category.category,
        user: user_category.user,
      });
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  }
}

module.exports = new UserCategoryController();
