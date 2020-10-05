import {Request, Response} from 'express';

const rootPageHandler = (req: Request, res: Response) => res.send('index.html');

export default rootPageHandler;