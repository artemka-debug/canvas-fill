import express, {Request, Response} from 'express';
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
app.get('/', (req: Request, res: Response) => res.send('index.html'));
app.get('/indexes', (req: Request, res: Response) => {
    redisClient.get('squares', ((err, reply) => {
        if (!err && reply) {
            return res.json({result: JSON.parse(reply)});
        }
        res.json({result: []});
    }));
});
app.post('/fill-square', (req: Request, res: Response) => {
    const {id, color} = req.body;

    redisClient.get('squares', (err, reply) => {
        let json;
        if (reply) {
            json = JSON.parse(reply);
        }

        if (!json.includes(id)) {
            json.push({id, color});
        }

        const stringArray = JSON.stringify(json);
        socket.emit('fill-square', {id, color});
        res.json({result: redisClient.set('squares', stringArray)})
    });
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});