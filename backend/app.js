import productRoutes from './source/routes/fishRouter.js';
import express from "express"
const app = express();
const port = 8080;


app.use('/', productRoutes);


app.listen(
    port,
    () => console.log("SERVER ALLIVE!!")
)
