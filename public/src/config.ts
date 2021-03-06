const colors = ['#562c2c', '#f2542d', '#0e9594', '#127475'];
const mainDiv = document.getElementById('field');
const HTMLBorders = {
    x: {
      min: 60,
      max: window.innerWidth - 10
    },
    y: {
        min: 10,
        max: window.innerHeight - 50
    },
}
const closeSvg = `
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-bar-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
            </svg>`;

export {
    colors, mainDiv, closeSvg, HTMLBorders
}