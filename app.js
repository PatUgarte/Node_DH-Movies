const http = require("http");

const data = require("./data/index.js");

const movies = data.movies;

console.log(movies);

http.createServer((res, req) => {
    switch (res.url) {
        case "/":
            req.end("Home");
            break;
        case "/prueba":
            req.end("Prueba");
            break;
        default:
            req.end("Error");
            break;
    }
}).listen(8080, "localhost");