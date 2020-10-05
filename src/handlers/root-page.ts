import {Request, Response} from 'express';

export const rootPageHandler = (req: Request, res: Response) => res.send('index.html');