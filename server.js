
// create http server

const http =require ('http');

const server = http.createServer((request,response) =>{
    response.writeHead(200,'OK',{'Content-Type':'text/html'});
    response.end('<h1>HELLO WORLD </h1>');
});

server.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000/');
})