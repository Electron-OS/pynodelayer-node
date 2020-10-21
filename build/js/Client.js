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
        this.io.on('connection', function (socket) {
            socket.emit('runTask', {
                'func': func,
                'args': Object.assign({}, args)
            });
            console.log('Pocket sended !');
        });
    };
    return Client;
}());
exports.Client = Client;
