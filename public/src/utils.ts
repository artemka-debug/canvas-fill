import moment from "moment";
import Axios from "axios";

const changeDivBackgroundColor = (id: string, color: string = '') => {
    const div = document.getElementById(id);

    if (div) {
        div.style.backgroundColor = color;
    }
}

const getCurrentColor = () => {
    // @ts-ignore
    return window.color;
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

const addMouseDownEventListener = (div: HTMLElement) => {
    div.addEventListener('mousedown', async (e: MouseEvent) => {
        const cookieExpDate = Date.parse(getCookie('date'));

        if (!(e.target && !cookieExpDate)) {
            const diffSeconds = moment.unix(cookieExpDate / 1000).fromNow();
            displayPopupMessage(`Cannot fill the pixel because of the timeout. ${diffSeconds}`);
            return;
        }
        // @ts-ignore
        const id = e.target.id;
        const color = getCurrentColor();

        changeDivBackgroundColor(id, color);
        try {
            const res = await Axios.post('/fill-square', {
                id, color
            });
        } catch (e) {
            changeDivBackgroundColor(id, 'white');
            displayPopupMessage('There was an error with changing color of pixel!');
        }
    })
}

export {
    addMouseDownEventListener,
    changeDivBackgroundColor,
    displayPopupMessage,
    getCookie,
}