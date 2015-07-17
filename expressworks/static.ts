/*
Apply static middleware to serve index.html file without any routes.

Your solution must listen on the port number supplied by process.argv[2].

The index.html file is provided and usable via the path supplied by
process.argv[3]. However, you can use your own file with this content:

    <html>
      <head>
        <title>expressworks</title>
        <link rel="stylesheet" type="text/css" href="/main.css"/>
      </head>
      <body>
        <p>I am red!</p>
      </body>
    </html>

*/

/// <reference path="../typings/node/node.d.ts" />

class Static {

    constructor() {
        const express: any = require('express');
        const path: any = require('path');
        const app: any = express();

        app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

        app.listen(process.argv[2])
    }

}

var init = new Static();
