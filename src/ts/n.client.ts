import { Listener } from './n.listener';

export class Client {
  io: any;
  listener: any;
  socket: any;

  constructor() {
    this.listener = new Listener();
    this.io = this.listener.getIO();
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
