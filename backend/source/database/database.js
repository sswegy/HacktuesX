import mysql from "mysql2"


const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "fin_finder"
}).promise()

export default pool