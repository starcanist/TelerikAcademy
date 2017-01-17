function parseURL(args) {
    let url = args[0];
    let protocol,
        server,
        resource,
        startIndex;

    if (url.indexOf("://") !== -1) {
        protocol = url.split(":/")[0];
        server = url.split("/")[2];
        startIndex = url.indexOf(server) + server.length;
        resource = url.substring(startIndex, url.length);
    }

    console.log("protocol: " + protocol);
    console.log("server: " + server);
    console.log("resource: " + resource);
}

parseURL(['http://telerikacademy.com/Courses/Courses/Details/239']);
