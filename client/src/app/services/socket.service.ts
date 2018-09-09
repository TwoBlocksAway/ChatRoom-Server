import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as SocketIO from 'socket.io-client';
import { Message } from '../models/message';

const SERVER_URL = 'http://localhost:8080';
@Injectable({
    providedIn: 'root'
})
export class SocketService {

    constructor(private socket: SocketIO) {
        this.socket = SocketIO(SERVER_URL);
     }

    public send(message: Message) {
        this.socket.emit('message', message);
    }

    public onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}
