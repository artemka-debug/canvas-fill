import express             from 'express';
import redis               from 'redis';
import dotenv              from 'dotenv';
import io                  from 'socket.io';
import http                from 'http';
import bodyParser from "body-parser";
import router     from './api';

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

socket.on('connection', (socket) => {
    // socket.emit('connected')
});

app.use(router);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});