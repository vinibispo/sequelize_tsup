const { Sequelize } = require("sequelize");

const connection = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: console.log, // Default, displays the first parameter of the log function call
});
module.exports = connection;
