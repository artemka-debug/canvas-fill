import { redisClient } from '../index';
import {Response, Request} from 'express';

export const getIndexesHandler = (req: Request, res: Response) => {
  redisClient.get('squares', ((err, reply) => {
    if (!err && reply) {
      return res.json({result: JSON.parse(reply)});
    }
    res.json({result: []});
  }));
};
