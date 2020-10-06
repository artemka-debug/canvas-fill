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
    console.log('hi');
    // @ts-ignore
    document.getElementById('zoom-in').addEventListener('click', zoomIn, true)
    // @ts-ignore
    document.getElementById('zoom-out').addEventListener('click', zoomOut, true)
    // @ts-ignore
    document.getElementById('colors').addEventListener('input', setCurrentColor, true)

    const htmlElements = [
        document.getElementById('zoom-in'),
        document.getElementById('zoom-out'),
        document.getElementById('colors')
    ]

    const onClickFunctions = [
        zoomIn, zoomOut, setCurrentColor
    ]

    // @ts-ignore
    for (const [i, element] of htmlElements) {
        if (element) {
            element.addEventListener('click', onClickFunctions[i]);
        }
    }
}

export default initOnClickFunctions;
