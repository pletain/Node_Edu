const http = require('http');

http.createServer( (request, response) => {  
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Server');
    response.end();
}).listen(3000);//listen : 3000번 포트로 createServer: 서버 띄우기
