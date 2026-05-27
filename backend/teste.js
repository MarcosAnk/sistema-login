const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1 style="color:blue;text-align:center;margin-top:100px">✅ SERVIDOR FUNCIONANDO!</h1><p style="text-align:center">Se voce esta vendo isso, o problema eh o arquivo HTML</p>');
});

server.listen(3000, () => {
    console.log('Teste em http://localhost:3000');
});