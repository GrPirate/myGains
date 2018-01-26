var pad = require("pad-left");
var toCamelCase = require("to-camel-case");
const prettyMs = require("pretty-ms");
var hirestime = require("hirestime");
var fecha = require("fecha");

var padd = pad("4", 11, 0);
console.log(padd);
console.log(toCamelCase('aaaaa.ewerewr'));
console.log(prettyMs(123241234123, { verbose: true }));
console.log(fecha.format(new Date(2015, 10, 20), 'dddd MMMM Do, YYYY'))
var getElapsed = hirestime();
setTimeout(() => {
    console.log(getElapsed());
}, 1000);
