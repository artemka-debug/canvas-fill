import express from 'express';
import redis from 'redis';
import dotenv from 'dotenv';
import io from 'socket.io';
import http from 'http';
import bodyParser from "body-parser";
import rootPageHandler from "./handlers/root-page";
import getIndexesHandler from "./handlers/indexes";
import fillSquare from "./handlers/fill-square";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const server = new http.Server(app);
export const socket = io(server);
export const redisClient = process.env.REDIS_URL ?
    redis.createClient(process.env.REDIS_URL) :
    redis.createClient();

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/', rootPageHandler);
app.get('/indexes', getIndexesHandler);
app.post('/fill-square', fillSquare);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});