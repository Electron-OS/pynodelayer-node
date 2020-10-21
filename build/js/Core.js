"use strict";
exports.__esModule = true;
exports.Core = void 0;
var express = require("express");
var http = require("http");
var io = require("socket.io");
var Core = /** @class */ (function () {
    function Core() {
        this.express = express();
        this.http = http.createServer(this.express);
        this.io = io(this.http);
        this.http.listen(3000, function () { });
    }
    Core.prototype.getIO = function () {
        return this.io;
    };
    return Core;
}());
exports.Core = Core;
