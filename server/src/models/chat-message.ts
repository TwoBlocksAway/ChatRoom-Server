import { Message, User } from './';

export class ChatMessage extends Message{

    /**
     * Initializes user and chat messages
     * 
     * @class
     * @constructor
     * @param from user
     * @param content chat content
     */
    constructor(from: User, content: string) {
        super(from, content);
    }
}