import mysql from "mysql2"


const pool = mysql.createPool({
    host: "...",
    user: "root",
    password: "password",
    database: "..."
}).promise()

export default pool