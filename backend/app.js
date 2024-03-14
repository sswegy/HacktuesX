import express from 'express';
import parser from 'body-parser';
const port = 8080;
const app = express();
import mysql from 'mysql';



/*var con = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'toor',
    database: 'razrabotka'
});
*/

app.listen(
    port,
    () => console.log("SERVER ALLIVE!!")
)

app.use(parser.json());


app.get('/', (req, res) => {
    console.log(req.body["long"],req.body["lat"]);
    res.status(200).send({
        respons: req.body
    })
});
