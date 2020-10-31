import { Core } from './Core';

export class Client {
  io: any;
  core: any;

  constructor() {
    this.core = new Core();
    this.io = this.core.getIO();
  }

  call(func: string , args?: any[]) {
    return new Promise((resolve , reject) => {
      this.io.on('connection', (socket: any) => {
        let id = Date.now();

        socket.emit('runTask', {
          'id' : id.toString() ,
          'func' : func ,
          'args' : Object.assign({}, args)
        });

        socket.on(id.toString() , (msg: any) => {
          resolve(msg);
        });
      });
    });
  }
}
