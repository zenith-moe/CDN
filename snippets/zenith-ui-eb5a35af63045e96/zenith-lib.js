export function init_scrollbar(el, always_on_top) {
    const ps = new PerfectScrollbar(el, {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });
    ps.update();

    if (always_on_top) {
        el.querySelectorAll(".ps__rail-y").forEach(element => {
            element.style.zIndex = "10000";
        });
        el.querySelectorAll(".ps__rail-x").forEach(element => {
            element.style.zIndex = "10000";
        });
    }
    if (window.perfect_scrollbars) {
        let first_null = window.perfect_scrollbars.indexOf(null);
        if (first_null !== -1) {
            window.perfect_scrollbars[first_null] = ps;
        } else {
            let length = window.perfect_scrollbars.push(ps);
            return length - 1;
        }
    } else {
        window.perfect_scrollbars = [];
        let length = window.perfect_scrollbars.push(ps);
        return length - 1;
    }
}

export function update_scrollbar(index) {
    if (window.perfect_scrollbars) {
        let ps = window.perfect_scrollbars[index];
        if (ps) {
            ps.update();
        }
    } else {
        window.perfect_scrollbars = [];
    }
}

export function destroy_scrollbar(index) {
    if (window.perfect_scrollbars) {
        let ps = window.perfect_scrollbars[index];
        if (ps) {
            ps.destroy();
            window.perfect_scrollbars[index] = null;
        }
    } else {
        window.perfect_scrollbars = [];
    }
}

export function api_prefix() {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    let port = window.location.port;
    if (port === null || port === undefined || port === "")
        port = null;

    return `${protocol}//${hostname}${port != null ? `:${3030}` : ""}`;
}

export function js_change_bg(class_name) {
    document.body.classList.add(class_name);
}

export function js_drop_bg(class_name) {
    document.body.classList.remove(class_name);
}

export function get_timezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function get_timezone_offset() {
    return new Date().getTimezoneOffset();
}

export function download_file(base64, name) {
    const dataURLtoBlob = (data_url) => {
        let arr = data_url.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: mime});
    }

    const downloadFile = (url) => {
        const link = document.createElement('a');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.href = url;
        link.download = name;
        link.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
    }

    const blob = dataURLtoBlob(base64);
    const url = URL.createObjectURL(blob);
    downloadFile(url, name)
}

export function fullscreen_enabled() {
    return document.fullscreenEnabled
        || window.fullScreen
        || document.webkitIsFullScreen
        || document.msFullscreenEnabled;
}

export function request_fullscreen(element) {
    if (fullscreen_enabled()) {
        element.requestFullscreen();
    }
}

export function exit_fullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}

export function hex_2_rgba(hex) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
    }
}