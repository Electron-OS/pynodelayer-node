const _Client = require("./build/js/Client");

// Export Client
module.exports = function Client() {
  return new _Client.Client();
};
