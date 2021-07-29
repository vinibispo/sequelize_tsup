'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
class Category extends Model {
  static init(sequelize) {
    super.init({
      description: DataTypes.STRING,
      title: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Category',
    })
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      through: models.UserCategory,
      as: 'users',
      foreignKey: 'userId'
    })
  }
};
module.exports = Category
