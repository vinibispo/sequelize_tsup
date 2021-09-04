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
    this.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
    this.belongsTo(models.Category, {foreignKey: 'categoryId', as: 'category'})
  }
};

module.exports = UserCategory
