function parseURL(url) {
    let parser = new URL(url);
    return {
        protocol: parser.protocol,
        hostname: parser.hostname,
        pathname: parser.pathname,
        search: parser.search,
        hash: parser.hash,
        host: parser.host
    };
}

console.log(parseURL("https://www.example.com/path?name=example#hash"));