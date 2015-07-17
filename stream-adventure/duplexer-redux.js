/*

 In this example, you will be given a readable stream, `counter`, as the first
 argument to your exported function:

 module.exports = function (counter) {
 // return a duplex stream to count countries on the writable side
 // and pass through `counter` on the readable side
 };

 Return a duplex stream with the `counter` as the readable side. You will be
 written objects with a 2-character `country` field as input, such as these:

 {"short":"OH","name":"Ohio","country":"US"}
 {"name":"West Lothian","country":"GB","region":"Scotland"}
 {"short":"NSW","name":"New South Wales","country":"AU"}

 Create an object to track the number of occurrences of each unique country code.

 For example:

 {"US": 2, "GB": 3, "CN": 1}

 Once the input ends, call `counter.setCounts()` with your counts object.

 The `duplexer2` module will again be very handy in this example.

 */
define(["require", "exports"], function (require, exports) {
    /// <reference path="../typings/node/node.d.ts" />
    var duplexer2 = require('duplexer2');
    var stream = require("stream");
    module.exports = function (counter) {
        var writable = new stream.Writable({ objectMode: true });
        var readable = new stream.Readable({ objectMode: true });
        var duplex = duplexer2(writeable, readableF);
        function writeable(a) {
            if (a === void 0) { a = true; }
        }
        function readableF() {
        }
        duplex.on("data", function (e) {
            console.log("got data", JSON.stringify(e));
        });
        duplex.on("end", function () {
            console.log("got end event");
        });
        return duplex;
    };
    var hello = (function () {
        function hello() {
        }
        return hello;
    })();
    return hello;
});
//# sourceMappingURL=duplexer-redux.js.map