export function api_prefix() {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    let port = window.location.port;
    if (port === null || port === undefined || port === "")
        port = null;

    return `${protocol}//${hostname}${port != null ? `:${3030}` : ""}`;
}
