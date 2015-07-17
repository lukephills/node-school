/*
 In this adventure, write some browser code that uses the websocket-stream module
 to print the string "hello\n".

 Your solution file will be compiled with browserify and the verify script will
 prompt you to open `http://localhost:8099` in a browser to verify your solution
 */
/// <reference path="../typings/node/node.d.ts" />
var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');
stream.write('hello\n');
//# sourceMappingURL=websockets.js.map