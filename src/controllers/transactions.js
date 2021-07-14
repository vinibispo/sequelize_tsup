const Transaction = require("../models/transaction");
const User = require("../models/user");
class TransactionController {
  async index(req, res) {
    const transactions = await Transaction.findAll({where: { userId: req.user.id} })
    return res.json(transactions);
  }
  async create(req, res) {
    try {
      const {type, description, value } = req.body;
      const transaction = await Transaction.create({type, description, value, userId: req.user.id});
      res.status(201).json(transaction);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  async update(req, res) {
    const { id } = req.params;
    const { description, value } = req.body;
    try {
      const transaction = await Transaction.findOne({where: {userId: req.user.id, id}})
      if (!transaction) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      await transaction.update({ description, value });
      return res.json(transaction);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  async show(req, res) {
    const { id } = req.params;
    try {
      const Transaction = await Transaction.findByPk(id);
      if (!Transaction) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      const { name, email, createdAt, updatedAt } = Transaction;
      return res.json({ id, name, email, createdAt, updatedAt });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  async destroy(req, res) {
    const { id } = req.params;
    try {
      const Transaction = await Transaction.findByPk(id);

      if (!Transaction) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      await Transaction.destroy();
      return res.status(204).send();
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new TransactionController();
