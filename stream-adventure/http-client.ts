/*
 Send an HTTP POST request to http://localhost:8099 and pipe process.stdin into
 it. Pipe the response stream to process.stdout.
 */

/// <reference path="../typings/node/node.d.ts" />
var request = require('request');

var r = request.post('http://localhost:8099');

process.stdin
    .pipe(r)
    .pipe(process.stdout);


