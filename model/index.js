const { Sequelize } = require("sequelize");

module.exports = new Sequelize("app1", "root", "W0lfd4l3", {
  host: "localhost",
  dialect: "mysql",
  logging: (...msg) => console.log(msg),
});
