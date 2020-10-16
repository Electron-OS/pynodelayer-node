"use strict";
exports.__esModule = true;
exports.Client = void 0;
var n_listener_1 = require("./n.listener");
var Client = /** @class */ (function () {
    function Client() {
        this.listener = new n_listener_1.Listener();
        this.io = this.listener.getIO();
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
