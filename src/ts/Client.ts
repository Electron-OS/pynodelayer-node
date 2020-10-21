import { Core } from './Core';

export class Client {
  io: any;
  core: any;
  socket: any;

  constructor() {
    this.core = new Core();
    this.io = this.core.getIO();
  }

  call(func: string , args?: any[]) {
    this.io.on('connection', (socket: any) => {
      socket.emit('runTask', {
        'func' : func ,
        'args' : Object.assign({}, args)
      });
      console.log('Pocket sended !');
    });
  }
}
