import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import fillSquare from "./routes/fill-square";
import indexes from "./routes/indexes";
import main from "./routes/main";
import {app, server} from "./config";

dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/', main);
app.get('/indexes', indexes);
app.post('/fill-square', fillSquare);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});