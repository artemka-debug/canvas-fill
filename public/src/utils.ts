const changeDivBackgroundColor = (id: string, color: string = '') => {
    const div = document.getElementById(id);

    if (div) {
        div.style.backgroundColor = color;
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