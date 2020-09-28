import Axios from 'axios';
import {changeDivBackgroundColor, displayPopupMessage, getCookie} from './utils';
import {colors} from './config';
import io from 'socket.io-client';
import initCanvas from './initCanvas'
import moment from "moment";
import exp = require("constants");

initCanvas();
const socket = io();
const socketClient = socket.connect();
const squaresInRow = 72 || Math.ceil(innerWidth / length);
const squaresInColumn = 144 || Math.ceil(innerHeight / length);

socketClient.on('fill-square', ({id, color}: { id: string, color: string }) => {
    changeDivBackgroundColor(id, color);
    const expDate = moment().add(5, 'minutes').toDate().toUTCString();
    document.cookie = `filled=true; expires=${expDate}`;
    document.cookie = `date=${expDate}; expires=${expDate}`;
});

for (let x = 0; x < squaresInRow; x++) {
    const outerDiv = document.createElement('div');
    outerDiv.className = 'outer';

    for (let y = 0; y < squaresInColumn; y++) {
        const index = y * (squaresInColumn - squaresInRow) + x;
        const div = document.createElement('div');
        div.className = 'inner';
        div.id = `${index}`;
        div.addEventListener('mousedown', async (e: MouseEvent) => {
            const cookieExpDate = Date.parse(getCookie('date'));

            if (!(e.target && !cookieExpDate)) {
                const diffSeconds = moment.unix(cookieExpDate / 1000).fromNow();
                displayPopupMessage(`Cannot fill the pixel because of the timeout. ${diffSeconds}`);
                return;
            }
            // @ts-ignore
            const id = e.target.id;

            const color = colors[Math.floor(Math.random() * 4)];
            changeDivBackgroundColor(id, color);
            try {
                const res = await Axios.post('/fill-square', {
                    id, color
                });
            } catch (e) {
                changeDivBackgroundColor(id, 'white');
                displayPopupMessage('There was an error with changing color of pixel!');
            }
        })

        outerDiv.appendChild(div);
    }

    document.body.appendChild(outerDiv);
}

