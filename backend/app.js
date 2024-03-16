import fishesRoute from './source/routes/fishRouter.js';
import express from "express"
import process from "./process.js"
import cors from "cors"
const app = express();
const port = process.PORT;

app.use(cors());
app.use('/fishes', fishesRoute);


app.listen(
    port,
    () => console.log("SERVER ALLIVE!!")
)
