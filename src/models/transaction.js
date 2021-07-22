'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
  class Transaction extends Model {
    static init(sequelize) {
    super.init(
      {
        type: DataTypes.NUMBER,
        description: DataTypes.STRING,
        value: DataTypes.DECIMAL
      }, {
        modelName: 'Transaction',
        sequelize
      }
    )
  }
    static associate(models) {
    this.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
    }
  };

module.exports = Transaction;
