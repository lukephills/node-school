/*
 You will be given text on process.stdin. Buffer the text and reverse it using
 the `concat-stream` module before writing it to stdout.

 `concat-stream` is a write stream that you can pass a callback to get the
 complete contents of a stream as a single buffer.
*/

/// <reference path="../typings/node/node.d.ts" />
var concat = require('concat-stream');

process.stdin
    .pipe(concat(function (data: Buffer) {
        var reversedString: string = reverse(data.toString());
        console.log(reversedString);
    }));

function reverse(s:string): string {
    return s.split("").reverse().join("")
}

