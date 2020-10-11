import {Request, Response} from "express";
import {redisClient} from "../config";

const indexes = (req: Request, res: Response) => {
    redisClient.get('squares', ((err, reply) => {
        if (!err && reply) {
            return res.json({result: JSON.parse(reply)});
        }
        res.json({result: []});
    }));
};

export default indexes;