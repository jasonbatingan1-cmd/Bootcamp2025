const express = require('express');

const app = express();
const PORT = 3000 //can use ports 8000, 8080, 3000 series, 5000 series
const HOSTNAME = 'localhost'

//Basic route
app.get('/', (req, res) => {
res.send('Hello welcome to Express.js demo');
});

//Route for POST request Demo
app.post('/', (req, res) => { //req = input, res = data being sent back
res.status(201); //HTTP status code 201 = created
res.send('POST request received and processed');
});

app.listen(PORT, () => {
console.log(`Server running at http://${HOSTNAME}:${PORT}/`);console
});