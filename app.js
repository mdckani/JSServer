const http = require('http')
const todos = require('./todos')
const PORT = process.env.PORT || 5000
const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.writeHead(200, {
            "content-type": "text/plain"
        })
        response.end("Node server");
    } else if (request.url === '/api/todos' && request.method === 'GET') {
        response.writeHead(200, {
            'content-type': 'application/json'
        })
        response.end(JSON.stringify(todos))
    } else {
        response.write("Not Found!"+ request.url );
        response.end();
    }


})
server.listen(PORT, () => {
    console.log('Server is ready and listening to ' + PORT)
})
server.on('error', (error) => {
    if (error.code = 'EADRINUSE') {
        console.log('Port is already in use')
    }
})