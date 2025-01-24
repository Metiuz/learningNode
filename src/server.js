import app from "./app";
const sequelize = require("./config/database");

sequelize.sync().then(()=> console.log("database connected successfully"));

app.listen(4000, () => {
    console.log("Server started on port 4000");
});