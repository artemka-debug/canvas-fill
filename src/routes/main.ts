import {Request, Response} from "express";

const main = (req: Request, res: Response) => res.send('index.html');

export default main;