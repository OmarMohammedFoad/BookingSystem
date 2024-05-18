"use strict";
// import pg from 'pg';
Object.defineProperty(exports, "__esModule", { value: true });
// const pool = new pg.Pool({
//     user:"admin",
//     password:"omar123",
//     host:"localhost",
//     port:5432,
//     database:"test_db"
// });
// export default pool;
const sequelize_1 = require("sequelize");
const connect = new sequelize_1.Sequelize("test_db", "admin", "omar123", {
    host: "localhost",
    dialect: "postgres",
    // port:5432
});
exports.default = connect;
