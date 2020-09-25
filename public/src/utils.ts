const colors = ['#562c2c', '#f2542d', '#0e9594', '#127475'];

const changeDivBackgroundColor = (id: string, flag: string = '') => {
    const div = document.getElementById(id);

    if (div) {
        if (flag === 'blank') {
            div.style.backgroundColor = 'white';
        } else {
            div.style.backgroundColor = colors[Math.floor(Math.random() * 4)]
        }
    }
}

const displayPopupMessage = (message: string = '') => {
    const alert = document.createElement('div');
    alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        ${message}
        </div>`.trim();
    alert.id = 'alert';
    alert.className = 'fade-away'

    document.body.insertBefore(alert, document.getElementById('placeholder'));

    setTimeout(() => {
        const alert = document.getElementById('alert');
        if (alert && alert.parentNode) {
            alert.parentNode.removeChild(alert);
        }
    }, 3000);
}

export {
    changeDivBackgroundColor,
    displayPopupMessage
}