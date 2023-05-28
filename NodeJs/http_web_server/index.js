const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    const userData = fs.readFileSync(`${__dirname}/userAPI/userdata.json`, "utf8");
    const orgData = JSON.parse(userData);

    if (req.url == "/") {
        res.end("Welcome to Home Page !");
    } else if (req.url == "/contact") {
        res.end("Welcome to Contact Page !");
    } else if (req.url == "/about") {
        res.end("Welcome to About Page !");
    } else if (req.url == "/userdata") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(orgData[0].firstName);
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>Page Not Found !</h1>");
    }

});

server.listen("7000", "127.0.0.1", () => {
    console.log("Listening Response !");
});