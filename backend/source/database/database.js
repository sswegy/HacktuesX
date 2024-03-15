import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const pool = mysql.createPool({
    host: proccess.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
}).promise()

export default pool