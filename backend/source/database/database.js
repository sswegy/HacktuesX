import mysql from "mysql2"
import process from "../../process.js"

const pool = mysql.createPool({
    host: process.host,
    user: process.user,
    password: process.password,
    database: process.database,
    connectionLimit: process.connectionLimit.connectionLimit
}).promise()

export default pool