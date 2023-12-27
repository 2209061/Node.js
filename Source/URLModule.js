var http=require("http");
var URL=require("url");

var server =http.createServer (function(req,res){

    var myURL="https://uk.search.yahoo.com/search?fr=mcafee&type=E210GB91082G0&p=google.com+google+home";

    var myURLObj=URL.parse(myURL,true);

    var myHostName=myURLObj.host;
    var myPathName=myURLObj.path;
    var mySearchHostName=myURLObj.search;

 res.writeHead(200,{'Content-type':'text/html'})
    res.write(myPathName);
    res.end();

})

server.listen(5050);

console.log("Server Run Success");