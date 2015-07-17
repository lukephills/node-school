/*
Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

The port number will be provided to you by expressworks as the first argument of
the application, ie. process.argv[2].

Run $ killall node  before verifying exercises (in your terminal on Mac OS X) to end any previous processes. For Windows, use taskkill /IM node.exe.
*/
/// <reference path="../typings/node/node.d.ts" />
var express = require('express');
var app = express();
app.get('/home', function (req, res) {
    res.end('Hello World!');
});
app.listen(process.argv[2]);
//# sourceMappingURL=hello-world.js.map