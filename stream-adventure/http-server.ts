/*
 Write an http server that uses a through stream to write back
 the request stream as upper-cased response data for POST requests.

 Streams aren't just for text files and stdin/stdout. Did you know that http
 request and response objects from node core's `http.createServer()` handler are
 also streams?

 */

/// <reference path="../typings/node/node.d.ts" />
var http = require('http');
var through = require('through2');

var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        req
            .pipe(through(write))
            .pipe(res);
    } else res.end();
});
server.listen(Number(process.argv[2]));

function write(buffer: Buffer, encoding, next: Function) {
    this.push(buffer.toString().toUpperCase());
    next();
}

