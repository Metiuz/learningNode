const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Customers extends Model{}

Customers.init({
    name:{
        type:DataTypes.STRING,
    },
    cell_number:{
        type:DataTypes.INTEGER,
    },
    marked_date:{
        type:DataTypes.STRING,
    },
    type_service:{
        type:DataTypes.STRING,
    }
},{
    sequelize,
    modelName:"customer",
    timestamps: false,
});

module.exports = Customers;