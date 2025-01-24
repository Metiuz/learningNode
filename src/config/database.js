const Sequelize = require("sequelize");
const sequelize = new Sequelize("customers-db", "user", "password", {
    dialect: "sqlite",
    host: "./customers.sqlite",
});

module.exports = sequelize;