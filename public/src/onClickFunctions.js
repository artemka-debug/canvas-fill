const setCurrentColor = (id) => {
    const input = document.getElementById(id);
    console.log(input);
    window.color = input.value;
}

const zoomIn = () => {
    const field = document.getElementById('field');
    const currentZoom = field.style.zoom;

    if (currentZoom === '300%') {
        return;
    }
    field.style.zoom =
        !currentZoom ?
            '110%' :
            `${+currentZoom.substr(0, currentZoom.indexOf('%')) + 10}%`;
}

const zoomOut = () => {
    const field = document.getElementById('field');
    const currentZoom = field.style.zoom;

    if (currentZoom === '10%') {
        return;
    }
    field.style.zoom =
        !currentZoom || currentZoom.length === 2 ?
            '90%' :
            `${+currentZoom.substr(0, currentZoom.indexOf('%')) - 10}%`;
}