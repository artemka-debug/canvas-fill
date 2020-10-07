const closeButton = () => {
    const button = document.getElementById('closeButton') as HTMLButtonElement;
    const inputs = document.getElementById('inputs');

    if (button.value === 'opened' && inputs) {
        button.style.transition = '0.5s';
        button.style.transform = 'rotate(180deg)';
        button.value = 'closed';

        inputs.style.transition = '0.5s';
        inputs.style.transform = 'translate(-480px, 0px)';
    } else if (inputs) {
        button.style.transition = '0.5s';
        button.style.transform = 'rotate(0deg)';
        button.value = 'opened';

        inputs.style.transition = '0.5s';
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

const initOnClickFunctions = () => {
    // @ts-ignore
    document.getElementById('zoom-in').addEventListener('click', zoomIn, true)
    // @ts-ignore
    document.getElementById('zoom-out').addEventListener('click', zoomOut, true)
    // @ts-ignore
    document.getElementById('colors').addEventListener('input', setCurrentColor, true)
    // @ts-ignore
    document.getElementById('closeButton').addEventListener('click', closeButton, true)
}

export default initOnClickFunctions;
