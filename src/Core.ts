import express = require("express");
import http = require('http');
import io = require('socket.io');

export class Core {
  express: any;
  http: any;
  io: any;

  constructor() {
    this.express = express();
    this.http = http.createServer(this.express);
    this.io = io(this.http);
    this.http.listen(3000, () => { });
  }

  getIO(): any {
    return this.io;
  }
}
