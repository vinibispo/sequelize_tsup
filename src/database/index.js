const { Sequelize } = require("sequelize");
const User = require("../models/user");
const Transaction = require("../models/transaction");
const Category = require('../models/category')
const UserCategory = require('../models/user_category.js')


const connection = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: console.log, // Default, displays the first parameter of the log function call
});
User.init(connection)
Transaction.init(connection)
Category.init(connection)
UserCategory.init(connection)

User.associate(connection.models)
Transaction.associate(connection.models)
Category.associate(connection.models)

module.exports = connection;
