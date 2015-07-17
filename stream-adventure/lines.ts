/*
Convert even-numbered lines to upper-case and odd-numbered
lines to lower-case. Consider the first line to be odd-numbered.
*/

/// <reference path="../typings/node/node.d.ts" />
var through = require('through2');
var stream = through(write, end);
var split = require('split');
var count = 0;

process.stdin
    .pipe(split())
    .pipe(stream)
    .pipe(process.stdout);


function write(buffer: Buffer, encoding, next) {
    if (count++ % 2 === 0) {
        this.push(buffer.toString().toLowerCase() + '\n');
    } else {
        this.push(buffer.toString().toUpperCase() + '\n');
    }
    next();
}

function end(done) {
    done()
}

