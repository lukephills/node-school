/*

 Write a program that exports a function that spawns a process from a `cmd`
 string and an `args` array and returns a single duplex stream joining together
 the stdin and stdout of the spawned process.

 */
/// <reference path="../typings/node/node.d.ts" />
const spawn = require('child_process').spawn;
const duplexer = require('duplexer');
module.exports = function (cmd, args) {
    const sp = spawn(cmd, args);
    return duplexer(sp.stdin, sp.stdout);
};
//# sourceMappingURL=duplexer.js.map