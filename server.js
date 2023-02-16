const http = require('http')
const PORT = process.env.PORT || 5000
const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "content-type": "text/plain"
    })
    response.end("Hello JS server here...")
})
server.listen(PORT, () => {
    console.log('Server is ready and listening to ' + PORT)
})
server.on('error', (error) => {
    if (error.code = 'EADRINUSE') {
        console.log('Port is already in use')
    }
})