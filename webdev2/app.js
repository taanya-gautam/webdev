///const http =require('http');
//const server =http.createServer((req,res)=>{
  //  console.log(req.url,req.method,req.headers);
  //  res.setHeader('Content-type','text/html');
   // res.write('<html>');
   // res.write('<head><title>my first page</title></head>');
   // res.write('<body><h1>hello from my node.js server</h1></body>');
  //  res.write('</html>');
  //  res.end();
//});
//server.listen(3000);

//const http =require('http');
//const server =http.createServer((req,res)=>{
    //const url=req.url;
   // if(url === '/'){
    //    res.write('/html');
   //     res.write('<head><title>Enter Message</title><head>');
    //    res.write('<body><form action ="/message"method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
   //     res.write('</html>');
   //     res.end();
   // }
  //  res.setHeader('Content-type','text/html');
   // res.write('<html>');
   // res.write('<head><title>my first page</title></head>');
   // res.write('<body><h1>hello from my node.js server</h1></body>');
   // res.write('</html>');
   // res.end();
//});
//server.listen(3000);


const http =require('http');
const routes = require ('./routes.js');
const server = http.createServer(routes) ;


server.listen(3000);



