'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
const  connection = require('../database')
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    this.belongsTo(models.User)
    }
  };
  Transaction.init({
    type: DataTypes.NUMBER,
    description: DataTypes.STRING,
    value: DataTypes.DECIMAL
  }, {
    sequelize: connection,
    modelName: 'Transaction',
  });

module.exports = Transaction;
