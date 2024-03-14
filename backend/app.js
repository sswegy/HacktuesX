import productRoutes from './source/routes/fishRouter.js';
import express from "express"
import pool from './source/database/database.js';
const app = express();
const port = 8080;

app.use('/', productRoutes);


app.listen(
    port,
    () => console.log("SERVER ALLIVE!!"),
     // Insert example records into fishes table
    kur()
)
