const http = require('http');
const fs = require('fs');
const qs = require('querystring');

//Create a server object
const server = http.createServer((req, res) => {
    const querystring = req.url.split('?')[1]; //splits the url into an array at the '?', at the 1 index of the URL (localhost:8080 = index 0, month=x is index 1)
    const query = qs.parse(querystring);
    const monthNumber = query.month;

    const fileName = (monthNumber > 4 & monthNumber <10) ? 'summer.html' : 'winter.html'; //Ternary Operator

    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, { 'content-type' : 'text-plain'});
            res.end('File not found');
        }
        res.writeHead(200, { 'content-type' : 'text/html'});//tells that the response will be an text or HTML file (summer/winter.html in this case)
        res.end(data);
    });
 
});

//start the server and listen on the specified port
const PORT = 8080;
const HOSTNAME = 'localhost'
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
    console.log("calling this API");
});   