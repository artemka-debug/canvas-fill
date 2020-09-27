import io from 'socket.io-client';
import {changeDivBackgroundColor} from './utils'

const socket = io();
const socketClient = socket.connect();

socketClient.on('fill-square', (data: {id: string, color: string}) => {
    const {id, color} = data;
    changeDivBackgroundColor(id, color);
});