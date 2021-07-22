"use strict";
const { Model, DataTypes } = require("sequelize");
class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
      },
      {
        modelName: "User",
        sequelize
      }
    )
  }
  static associate(models) {
    this.hasMany(models.Transaction, {foreignKey: 'userId', as: 'transactions'})
  }
}

module.exports = User;

