'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
class UserCategory extends Model {
  static init(sequelize) {
  super.init({
    userId: DataTypes.NUMBER,
    categoryId: DataTypes.NUMBER
  }, {
      sequelize,
      modelName: 'UserCategory',
    })
}

  static associate(models) {
    // define association here
  }
};

module.exports = UserCategory
