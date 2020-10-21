const _Client = require("./build/js/Client");

// Export Client
exports.Client = function() {
  return new _Client.Client();
};
