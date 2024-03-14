import mysql from "mysql2"


const pool = mysql.createPool({
    host: "34.133.163.137",
    user: "hacktues10",
    password: "KtR8eU<LU}/4T.Jm",
    database: "fin_finder"
}).promise()

export default pool