const Category = require("../models/category");
class CategoryController {
  async index(_, res) {
    const categories = await Category.findAll();
    return res.json(categories);
  }
  async create(req, res) {
    try {
      const {title, description } = req.body;
      const category = await Category.create({ title, description });
      res.status(201).json({
        title,
        description,
        id: category.id,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt,
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  async update(req, res) {
    const { id } = req.params;
    const {title, description} = req.body;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      await category.update({title, description});
      const { createdAt, updatedAt} = category;
      return res.json({title, description, createdAt, updatedAt, id});
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  async show(req, res) {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      const { title, description, createdAt, updatedAt } = category;
      return res.json({ id, title, description, createdAt, updatedAt });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  async destroy(req, res) {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      await category.destroy();
      return res.status(204).send();
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new CategoryController();
