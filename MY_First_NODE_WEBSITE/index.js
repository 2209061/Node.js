var fs =require('fs');
var http=require('http');

var server= http.createServer(function(req,res) {

    if(req.url=="/"){

       let data=fs.readFileSync("Home.html","utf8")

        res.end (data);

    }
    else if (req.url=="/Contact"){
        let data= fs.readFileSync("Contact.html","utf8")

        res.end (data);

    }

    else if (req.url=="/About"){

        let data= fs.readFileSync("About.html","utf8")

        res.end (data);
    }

    else if (req.url=="/Terms"){
        let data= fs.readFileSync("Terms.html","utf8")

        res.end (data);

    }

});

server.listen(8080);
console.log("Server Run Success");