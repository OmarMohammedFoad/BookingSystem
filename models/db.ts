// import pg from 'pg';

// const pool = new pg.Pool({
//     user:"admin",
//     password:"omar123",
//     host:"localhost",
//     port:5432,
//     database:"test_db"
// });

// export default pool;

import { Sequelize } from "sequelize";
const connect = new Sequelize("postgres","admin","omar123",{
    host:"localhost",
    dialect:"postgres",
    // port:5432
});
export default connect;