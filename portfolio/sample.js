const http = require('http');
const fs = require('fs');
let server = http.createServer(requestHandler);
function requestHandler(req, res){
    let str = req.url;
    console.log(str);
    if(str == '/' || str == '/index.html'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('index.html').pipe(res);
    }
    else if(str.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream(str.slice(1)).pipe(res);
    }
    else if(str.endsWith('.png')) {
        res.setHeader('Content-Type', 'image/png');
        fs.createReadStream(str.slice(1)).pipe(res);
    }
    else if(str.endsWith('.jpg')) {
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream(str.slice(1)).pipe(res);
    }
    else if(str == '/schedule'|| str == '/schedule.html'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('schedule.html').pipe(res);
    }
    else if(str == '/speakers' || str == '/speakers.html'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('speakers.html').pipe(res);
    }
    else if(str == '/venue' || str == '/venue.html'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('venue.html').pipe(res);
    }
    else if(str == '/register' || str == '/register.html'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('register.html').pipe(res);
    }
    else
        res.end('404 Page not Found');
}

server.listen(3000, ()=>console.log('Server has started'));