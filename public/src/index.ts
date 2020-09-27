import Axios from 'axios';
import {changeDivBackgroundColor, displayPopupMessage} from './utils';
import {colors} from './config';

const squaresInRow = 72 || Math.ceil(innerWidth / length);
const squaresInColumn = 144 || Math.ceil(innerHeight / length);

(async () => {
    try {
        const res = await Axios.get('/indexes');
        const indexes = res.data.result;

        for (const data of indexes) {
            changeDivBackgroundColor(data.id, data.color);
        }
    } catch (e) {
        displayPopupMessage('There was an error with getting filled pixels!');
    }
})()

for (let x = 0; x < squaresInRow; x++) {
    const outerDiv = document.createElement('div');
    outerDiv.className = 'outer';

    for (let y = 0; y < squaresInColumn; y++) {
        const index = y * (squaresInColumn - squaresInRow) + x;
        const div = document.createElement('div');
        div.className = 'inner';
        div.id = `${index}`;
        div.addEventListener('mousedown', async (e: MouseEvent) => {
            if (e.target) {
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
            }
        })

        outerDiv.appendChild(div);
    }

    document.body.appendChild(outerDiv);
}

