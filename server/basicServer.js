var http = require('http');

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.
const http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end('Welcome to NodeJS');
}

server.listen(5555, console.log('Server is running on port 5555'));

// 2. Write script to create a server, send in response the request headers 
// and add listener on port 6666.
const http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req);
  var header = JSON.stringify(req.headers);
  res.end(header);
}

server.listen(6666, console.log('Server is running on port 6666'));
// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.
const http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log('url: ',req.url);
  console.log('Method: ', req.method);
  res.end();
}

server.listen(3000, console.log('Server is running on port 3000'));
// 4. create a server
  // - set response headers as 'text/html' using res.setHeader property.
  // - write some HTML content in response
  // - listen on port 6000
  const http = require('http');
  var server = http.createServer(handleRequest);

  function handleRequest(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1> It's Working </h1>`);
  }

  server.listen(6000, console.log('Server is running on port 6000'));
// 5. create a server
  // - create a seperate file index.html and write some html content
  // - read the html file content and send it in response in createServer method
  // - don't forget to set header before writing to response
const http = require('http');
const fs = require('fs');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(__dirname + '/index.html', (err, data) => {

    if(err) {
      res.end('Error Occred!');
      return;
    } else {
        res.end(data);
    }
  })
}
// 6. create a server
  // - create 3 diffenrent file ie. indx.html, about.html, contact.html
  // - inside createServer, handle different urls for serving different html file
  // - '/' route for index.html file
  // - "/about" for about.html file
  // - "/contact" for contact.html file

  const http = require('http');
  const {parse} = require('url');
  const fs = require('fs');

  var server = http.createServer(handleRequest);
  function handleRequest(req, res) {
    res.setHeader('Content-Type', 'text/html');
    var parsedData = parse(req.url);
    
    if(parsedData.pathname === '/') {
      fs.createReadStream('./index.html').pipe(res);
    } else if(parsedData.pathname === '/about') {
        fs.createReadStream('./about.html').pipe(res);
    } else if(parsedData.pathname === '/contact') {
        fs.createReadStream('./contact.html').pipe(res);
    } else {
        res.end('Page Not Found!');
    }
  }
// 7. create an Server(echoServer)
  // handle post request for incoming data from postman using req as eventEmitter
  // send incoming data back in response

const http = require('http');
var server = http.createServer();

server.on('request', (req, res) => {
    var store = "";
    req.on('data', (chunk) => {
      store += chunk;
    })

    req.on('end', () => {
      res.end(store);
    })
})
// 8. create a server
  // handle json data from postman
  // parse the json data
  // send json data back in response
  const http = require('http');
  var server = http.createServer();

  server.on('request', (req, res) => {
      var store = "";
      req.on('data', (chunk) => {
        store += chunk;
      })

      req.on('end', () => {
        res.end(store);
      })
  })


// 9. create a server
  // handle x-www-urlencoded(form data) coming form postman
  // parse form-data using querystring module
  // send data back in response

const qs = require('querystring');
const http = require('http');

var server = http.createServer();
server.on('request', (req, res) => {
    var store = "";
    req.on('data', (chunk) => {
      store += chunk;
    })

    req.on('end', () => {
      var data = qs.parse(store);
      data = JSON.stringify(data)
      res.end(data);
    })
})
// 10. create a server and add listener on port 7000
  // send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
  // parse the request url using 'url' core node module
  // extract protocol, path and pathname, query from the request
  // send path in response

  const url = require('url');
  const qs = require('querystring');
  var server = http.createServer();
  
  server.on('request', (req, res) => {
    
    var urlObject = url.parse(req.url, true);
    if(urlObject.pathname === '/new') {
      
      var store = "";
      req.on('data', (chunk) => {
        store += chunk;
      }) 
  
      req.on('end', () => {
        console.log(urlObject);
       
        res.end(`Protocol: ${urlObject.protocol}, Path: ${urlObject.path}, Pathname: ${urlObject.pathname}, Query: ${JSON.stringify(urlObject.query)} `)
      })
    }
  })

// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node

const path = require('path');

var absolute = path.join(__dirname, 'theory.md');
var relative = './theory.md';

console.log(absolute);
