const _Client = require("./lib/Client");

// Export Client
module.exports = function Client() {
  return new _Client.Client();
};
