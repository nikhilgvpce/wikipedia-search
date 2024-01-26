import { postQuery } from "./routes/query";

import express from "express";
import cors from 'cors';

const app = express();

app.use(express.json())

app.use(cors())

app.post('/query', postQuery)

app.listen(8080, () => {
    console.log(`app listening on port 8080`)
})

