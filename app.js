var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var url_parse = url.parse(req.url, true);
  console.log(url_parse);
  res.end();
}).listen(8000);
// var http = require('http');
// var url = require('url');
// var fs = require('fs');
// var server = http.createServer(function(req, res) {
//   console.log("URL: " + req.url);
//   console.log("Method: " + req.method);
//   console.log("Header[Content-Type]: " + req.headers['content-type']);
//   var url_parse = url.parse(req.url, true);
//   console.log(url_parse);
//   if (req.url === "/hello"){
//     fs.readFile('./index.html', 'utf-8', function (error, data) {
//       res.writeHead(200, {'Content-Type' : 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }else if(req.url === "/bye") {
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('<head><meta charset="UTF-8"></head>');
//     res.end("<h1>さよならんきー！</h1>");
//   }else{
//     res.writeHead(404,{'Content-Type':'text/html'});
//     res.write('<head><meta charset="UTF-8"></head>');
//     res.end("<h1> Not Found </h1>");
//   }
// });

// server.listen(8000);
function parseJSONSync(json){
  try{
  return JSON.parse(json)
  }catch(err){
  console.error("エラーをキャッチ",err)
  }
}
  parseJSONSync('{"message":"hello"}')