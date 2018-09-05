#!/usr/bin/env node

var optimist = require("optimist");
var argv = optimist.usage("Fast Tag FE", {
    "listen_address" : {
        description : "Interface IP address to listen on",
        default : "0.0.0.0",
        required : true
    },
    "listen_port" : {
        description : "Port to listen on",
        default : 80,
        required : true
    },
    "help" : {
        description : "Prints this page",
        required : false,
        boolean: true,
        short : 'h' 
    }
}).argv;

if (argv.help) {
    optimist.showHelp();
    process.exit(1);
}

var http = require('http');
var ps = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<html></html>");
    response.end();
    console.log(request.method + " " + request.url);
});
ps.listen(argv.listen_port, argv.listen_address);
