export declare class Client {
    io: any;
    core: any;
    constructor();
    call(func: string, args?: any[]): Promise<unknown>;
}
