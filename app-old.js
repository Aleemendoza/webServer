const http = require('http');

http.createServer((req, res)=> {
    
    
    
res.writeHead(200, {'content-type':'text/plain'})
    
    res.write('404 not found')
    res.end()

}).listen(8000)

console.log('escuchando en el puerto', 8000)