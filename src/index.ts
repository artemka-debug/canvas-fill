import express from 'express';
import {Request, Response} from 'express-serve-static-core'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.post('/fill-square', (req: Request, res: Response) => {
    console.log('hi');
});

app.get('/', (req: Request, res: Response) => {
    res.send('index.html');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});