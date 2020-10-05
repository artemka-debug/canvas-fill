import Axios from "axios";
import {changeDivBackgroundColor, displayPopupMessage} from './utils';

const initCanvas = async () => {
    const field = document.getElementById('field');
    if (field) {
        field.style.width = '1440px';
        field.style.border = '1px solid black';
    }

    try {
        const res = await Axios.get('/indexes');
        const indexes = res.data.result;

        for (const data of indexes) {
            changeDivBackgroundColor(data.id, data.color);
        }
    } catch (e) {
        displayPopupMessage('There was an error with getting filled pixels!');
    }
}

export default initCanvas