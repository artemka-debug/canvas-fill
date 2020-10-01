import {Request, Response}     from 'express';
import { redisClient, socket } from '../index';


export const fillSquare = (req: Request, res: Response) => {
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
};
