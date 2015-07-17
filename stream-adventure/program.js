/// <reference path="../typings/node/node.d.ts" />
var through = require('through2');
var stream = through(write, end);
var split = require('split');
var count = 0;
process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
function write(buffer, encoding, next) {
    if (count++ % 2 === 0) {
        this.push(buffer.toString().toLowerCase() + '\n');
    }
    else {
        this.push(buffer.toString().toUpperCase() + '\n');
    }
    next();
}
function end(done) {
    done();
}
//# sourceMappingURL=program.js.map