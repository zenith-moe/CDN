export function scroll(el, always_on_top) {
    let ps = new PerfectScrollbar(el, {
        wheelSpeed: 2,
        wheelPropagation: false
    });

    const resize = () => {
        ps && ps.update();
    };

    if (always_on_top) {
        el.querySelector(".ps__rail-x").style.zIndex = "999999";
        el.querySelector(".ps__rail-y").style.zIndex = "999999";
    }
    window.addEventListener("resize", resize, false);
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