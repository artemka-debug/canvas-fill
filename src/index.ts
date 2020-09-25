import express from 'express';
import redis from 'redis';
import {Request, Response} from 'express-serve-static-core'
import dotenv from 'dotenv';
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
let redisClient: redis.RedisClient;

if (process.env.REDIS_URL) {
    redisClient = redis.createClient(process.env.REDIS_URL);
} else {
    redisClient = redis.createClient();
}

app.use(express.static('public'));
app.use(bodyParser.json());

redisClient.set('squares', '[]');

app.post('/fill-square', (req: Request, res: Response) => {
    const {id} = req.body;

    redisClient.get('squares', (err, reply) => {
        let json;
        if (reply) {
            json = JSON.parse(reply);
        }

        if (!json.includes(id)) {
            json.push(id);
        }

        const stringArray = JSON.stringify(json);
        res.json({result: redisClient.set('squares', stringArray)})
    });
});

app.get('/indexes', (req: Request, res: Response) => {
    redisClient.get('squares', ((err, reply) => {
        if (!err && reply) {
            res.json({result: JSON.parse(reply)});
            return;
        }

        res.json({result: []});
    }));
});

app.get('/', (req: Request, res: Response) => {
    res.send('index.html');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});