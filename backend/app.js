import fishesRoute from './source/routes/fishRouter.js';
import express from "express"

const app = express();
const port = process.env.port;

app.use('/fishes', fishesRoute);


app.listen(
    port,
    () => console.log("SERVER ALLIVE!!")
)
