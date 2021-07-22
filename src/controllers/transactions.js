const Transaction = require("../models/transaction");
class TransactionController {
  async index(req, res) {
    return res.json(req.user.transactions);
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
    const { transaction_id: id } = req.params;
    const { description, value } = req.body;
    try {
      console.log({userId: req.user.id, id})
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
    const { transaction_id: id } = req.params;
    try {
      const transaction = await Transaction.findByPk(id);
      if (!transaction) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      //const { description, value, createdAt, updatedAt } = transaction;
      return res.json(transaction);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  async destroy(req, res) {
    const { transaction_id: id } = req.params;
    try {
      const transaction = await Transaction.findByPk(id);

      if (!transaction) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      await transaction.destroy();
      return res.status(204).send();
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new TransactionController();
