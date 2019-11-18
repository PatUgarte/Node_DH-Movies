const http = require("http");
const routeSystem = require(__dirname + "/router.js");

http.createServer((res, req) => {
    req.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
    let texto = routeSystem.route(res.url);
    req.end(texto);
}).listen(8080, "localhost", () => console.log('Server running in 8080 port'));