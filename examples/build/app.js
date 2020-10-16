"use strict";
exports.__esModule = true;
var n_client_1 = require("../../build/js/n.client");
var client = new n_client_1.Client();
client.call('install', ['first', 'second']);
