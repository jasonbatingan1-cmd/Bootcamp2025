var emoji = require('emoji');
var http = require('http');
const capitalize = require('capitalize');

console.log('hello world');
console.log('😎', emoji.unifiedToHTML('😎'));

//Create a server object
const server = http.createServer((req, res) => {
    let responseTextRaw = 'i am smaller text';

    //set the response HTTP header with HTTP status and content type
    res.writeHead(200, {'content-type': 'text/plain'});

    //send the response body as 'Hello World'
    res.end(capitalize.words(responseTextRaw + '\n'));    
});

//start the server and listen on the specified port
const PORT = 8080;
const HOSTNAME = 'localhost'
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});    
//use *control+C* on mac keyboard to stop listening
