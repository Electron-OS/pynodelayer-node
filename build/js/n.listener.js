"use strict";
exports.__esModule = true;
exports.Listener = void 0;
var express = require("express");
var http = require("http");
var io = require("socket.io");
var Listener = /** @class */ (function () {
    function Listener() {
        this.express = express();
        this.http = http.createServer(this.express);
        this.io = io(this.http);
        this.http.listen(3000, function () { });
    }
    Listener.prototype.getIO = function () {
        return this.io;
    };
    return Listener;
}());
exports.Listener = Listener;
