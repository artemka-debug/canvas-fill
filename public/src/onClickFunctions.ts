import {HTMLBorders} from './config';
import {calculateCoordinates} from './utils'

const inputs = document.getElementById('inputs') as HTMLDivElement;
let isDown = false;
let offset = {
    x: 0,
    y: 0
};

const closeButton = () => {
    const button = document.getElementById('closeButton') as HTMLButtonElement;
    const inputs = document.getElementById('inputs');

    if (button.value === 'opened' && inputs) {
        button.style.transition = '0.5s';
        button.style.transform = 'rotate(180deg)';
        button.value = 'closed';

        inputs.style.transition = 'transform 0.5s';
        inputs.style.transform = `translate(-${inputs.offsetLeft + 300}px, 0px)`;
    } else if (inputs) {
        button.style.transition = '0.5s';
        button.style.transform = 'rotate(0deg)';
        button.value = 'opened';

        inputs.style.transition = 'transform 0.5s';
        inputs.style.transform = 'translate(0px, 0px)';
    }
}

const setCurrentColor = () => {
    const input = document.getElementById('colors');
    // @ts-ignore
    window.color = input.value;
}

const zoomIn = () => {
    const field = document.getElementById('field');
    if (field) {
        const currentZoom = field.style.zoom;

        if (currentZoom === '300%') {
            return;
        }
        field.style.zoom =
            !currentZoom ?
                '110%' :
                `${+currentZoom.substr(0, currentZoom.indexOf('%')) + 10}%`;
    }
}

const zoomOut = () => {
    const field = document.getElementById('field');
    if (field) {
        const currentZoom = field.style.zoom;

        if (currentZoom === '10%') {
            return;
        }
        field.style.zoom =
            !currentZoom || currentZoom.length === 2 ?
                '90%' :
                `${+currentZoom.substr(0, currentZoom.indexOf('%')) - 10}%`;
    }
}

const mouseDown = (e: MouseEvent) => {
    isDown = true;
    offset = {
        x: inputs.offsetLeft - e.clientX,
        y: inputs.offsetTop - e.clientY
    };
}

const mouseUp = () => {
    isDown = false;
}

const mouseMove = (event: MouseEvent) => {
    event.preventDefault();
    if (!isDown) {
        return;
    }

    let mousePosition = {x: 0, y: 0};
    const button = document.getElementById('closeButton') as HTMLButtonElement;

    if (button.value === 'closed') {
        mousePosition.y = calculateCoordinates(event.clientY, 10, window.innerHeight - 50);
        mousePosition.x = +inputs.style.left;
    }

    if (button.value === 'opened') {
        mousePosition.x = calculateCoordinates(event.clientX, 60, window.innerWidth - 10);
        mousePosition.y = calculateCoordinates(event.clientY, 10, window.innerHeight - 50);
    }

    inputs.style.left = `${mousePosition.x + offset.x}px`;
    inputs.style.top = `${mousePosition.y + offset.y}px`;
}

const initOnClickFunctions = () => {
    document.getElementById('zoom-in')?.addEventListener('click', zoomIn, true)
    document.getElementById('zoom-out')?.addEventListener('click', zoomOut, true)
    document.getElementById('colors')?.addEventListener('input', setCurrentColor, true)
    document.getElementById('closeButton')?.addEventListener('click', closeButton, true)
    document.addEventListener('mouseup', mouseUp, true);
    document.addEventListener('mousemove', mouseMove, true);
    inputs.addEventListener('mousedown', mouseDown, true);
}

export default initOnClickFunctions;
