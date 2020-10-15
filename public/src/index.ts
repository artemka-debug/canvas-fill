import {changeDivBackgroundColor,  addMouseDownEventListener} from './utils';
import {mainDiv} from './config';
import initOnClickFunctions from './onClickFunctions'
import io from 'socket.io-client';
import initCanvas from './initCanvas'
import moment from "moment";

initOnClickFunctions();
initCanvas();
const socket = io();
const socketClient = socket.connect();
const squaresInRow = 72 || Math.ceil(innerWidth / length);
const squaresInColumn = 144 || Math.ceil(innerHeight / length);

socketClient.on('fill-square', ({id, color}: { id: string, color: string }) => {
    changeDivBackgroundColor(id, color);
    const expDate = moment().add(0, 'seconds').toDate().toUTCString();
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

        addMouseDownEventListener(div);
        outerDiv.appendChild(div);
    }

    // @ts-ignore
    mainDiv.appendChild(outerDiv);
}

