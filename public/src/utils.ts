const changeDivBackgroundColor = (id: string, color: string = '') => {
    const div = document.getElementById(id);

    if (div) {
        div.style.backgroundColor = color;
    }
}

const getCookie = (name: string): string => {
    let dc = document.cookie;
    let prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return '';
        else {
            let oneCookie = dc.indexOf(';', begin);
            return dc.substring(begin, oneCookie == -1 ? dc.length : oneCookie).replace(prefix, '');
        }
    } else {
        begin += 2;
        let end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
        return dc.substring(begin, end).replace(prefix, '');
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
    displayPopupMessage,
    getCookie,
}