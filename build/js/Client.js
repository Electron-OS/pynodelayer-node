"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Core_1 = require("./Core");
var Client = /** @class */ (function () {
    function Client() {
        this.core = new Core_1.Core();
        this.io = this.core.getIO();
    }
    Client.prototype.call = function (func, args) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.io.on('connection', function (socket) {
                var id = Date.now();
                socket.emit('runTask', {
                    'id': id.toString(),
                    'func': func,
                    'args': Object.assign({}, args)
                });
                socket.on(id.toString(), function (msg) {
                    resolve(msg);
                });
            });
        });
    };
    return Client;
}());
exports.Client = Client;
