import * as http from 'http'
import * as express from 'express';

export class ChatServer {
    public static readonly PORT:number = 8080;

    private app: express.Application;
    private server: http.Server;
    private port: string | number;

    /**
     * Chat server constructor.
     * 
     * @class ChatServer
     * @constructor
     */
    constructor() {
        this.app = express();
        this.port = process.env.PORT || ChatServer.PORT;
        this.server = http.createServer(this.app);
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
    }

    /**
     * Gets express application
     * 
     * @class ChatServer
     * @return {express.Application} express application
     */
    public getApp(): express.Application {
        return this.app;
    }
}