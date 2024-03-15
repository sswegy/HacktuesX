import mysql from "mysql2"
import process from "../../process.js"

const pool = mysql.createPool({
    host: process.host,
    user: process.user,
    password: process.password,
    database: process.database
}).promise()

export default pool