const { Sequelize } = require("sequelize");

module.exports = new Sequelize("app1", "root", "Cilandak1!", {
  host: "35.188.147.1",
  dialect: "mysql",
  logging: (...msg) => console.log(msg),
});
