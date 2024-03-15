import fishesRoute from './source/routes/fishRouter.js';
import express from "express"
import process from "./process.js"
const app = express();
const port = process.PORT;

app.use('/fishes', fishesRoute);


app.listen(
    port,
    () => console.log("SERVER ALLIVE!!")
)
