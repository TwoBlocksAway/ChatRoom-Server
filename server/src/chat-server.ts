import * as Http from 'http'
import * as Express from 'express';
import * as ScoketIO from 'socket.io';

import { Message } from "./models";

export class ChatServer {
    public static readonly PORT:number = 8080;

    private app: Express.Application;
    private server: Http.Server;
    private socketServer: ScoketIO.Server;
    private port: string | number;

    /**
     * Initializes express application, http server, and port number
     * 
     * @class ChatServer
     * @constructor
     */
    constructor() {
        this.app = Express();
        this.port = process.env.PORT || ChatServer.PORT;
        this.server = Http.createServer(this.app);
        this.socketServer = ScoketIO(this.server);
        this.run();
    }

    /**
     * Runs the server on designiated port
     * 
     * @class ChatServer
     */
    private run(): void {
        this.server.listen(this.port, () => {
            console.log(`Running server on port ${this.port}`);
        });

        this.socketServer.on('connect', (socket: ScoketIO.Socket) =>  {
            console.log(`Connected client on port ${this.port}`);
            socket.on('message', (msg: Message) => {
                console.log(`[server](message): ${JSON.stringify(msg)}`);
                this.socketServer.emit('message', msg);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    /**
     * Gets express application
     * 
     * @class ChatServer
     * @return {express.Application} express application
     */
    public getApp(): Express.Application {
        return this.app;
    }
}