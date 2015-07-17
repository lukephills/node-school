/*

 Your program will get some html written to stdin. Convert all the inner html to
 upper-case for elements with a class name of "loud",
 and pipe all the html to stdout.

 You can use `trumpet` and `through2` to solve this adventure.

 */
/// <reference path="../typings/node/node.d.ts" />
const trumpet = require('trumpet');
const through = require('through2');
const tr = trumpet();
const loud = tr.select('.loud').createStream();
process.stdin.pipe(tr).pipe(process.stdout);
loud.pipe(through(write)).pipe(loud);
function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}
//# sourceMappingURL=html-stream.js.map