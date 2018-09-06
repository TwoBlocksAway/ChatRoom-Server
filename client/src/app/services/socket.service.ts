import { Injectable } from '@angular/core';
import { Message } from '../models';

import * as SocketIO from 'socket.io-client';

const SERVER_URL: string = 'http://localhost:8080';

@Injectable()
export class SocketService {

    private socket: SocketIO;

    constructor() { 
       this.socket = SocketIO(SERVER_URL);
    }

    public send(message: Message) {
        this.socket.emit("message", message);
    }

}
