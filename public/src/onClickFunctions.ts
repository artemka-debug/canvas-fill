import {HTMLBorders} from './config';
import {calculateCoordinates} from './utils'

let isDown = false;
let offset = {
    x: 0,
    y: 0
};

const closeButton = () => {
    const button = document.getElementById('closeButton') as HTMLButtonElement;
    const inputs = document.getElementById('inputs');

    if (button.value === 'opened' && inputs) {
        button.style.transform = 'rotate(180deg)';
        button.value = 'closed';

        inputs.style.transform = `translate(-${inputs.offsetLeft + 310}px, 0px)`;
    } else if (inputs) {
        button.style.transform = 'rotate(0deg)';
        button.value = 'opened';

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
    const inputs = document.getElementById('inputs') as HTMLDivElement;

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
    const inputs = document.getElementById('inputs') as HTMLDivElement;

    event.preventDefault();
    if (!isDown) {
        return;
    }

    let mousePosition = {x: 0, y: 0};
    const button = document.getElementById('closeButton') as HTMLButtonElement;

    if (button.value === 'closed') {
        mousePosition.y = calculateCoordinates(event.clientY, HTMLBorders.y.min, HTMLBorders.y.max);
        mousePosition.x = 60;
    }

    if (button.value === 'opened') {
        mousePosition.x = calculateCoordinates(event.clientX, HTMLBorders.x.min, HTMLBorders.x.max);
        mousePosition.y = calculateCoordinates(event.clientY, HTMLBorders.y.min, HTMLBorders.y.max);
    }

    inputs.style.left = `${mousePosition.x + offset.x}px`;
    inputs.style.top = `${mousePosition.y + offset.y}px`;
}

const initOnClickFunctions = () => {
    document.getElementById('zoom-in')?.addEventListener('click', zoomIn, true)
    document.getElementById('zoom-out')?.addEventListener('click', zoomOut, true)
    document.getElementById('colors')?.addEventListener('input', setCurrentColor, true)
    document.getElementById('closeButton')?.addEventListener('click', closeButton, true)
    document.getElementById('inputs')?.addEventListener('mousedown', mouseDown, true);
    document.addEventListener('mouseup', mouseUp, true);
    document.addEventListener('mousemove', mouseMove, true);
}

export default initOnClickFunctions;
