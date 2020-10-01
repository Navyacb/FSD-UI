// const http = require('http');
// const server=http.createServer();
// server.on('connection',function (socket) {
//     console.log(socket);
// })
// server.listen(3000);
// console.log('node server started on port 3000');


const http = require('http');
const server=http.createServer(((req, res) => {
    console.log(req.url);
    console.log(req.headers);
    console.log(req.method)
    })
);
server.listen(3000);
console.log('server started on port 3000');