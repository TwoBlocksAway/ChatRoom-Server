import { User } from "./user";

export class Message {

    /**
     * Initalizes who sent the message and content
     * 
     * @class
     * @constructor
     * @param from message is from this user
     * @param content message content
     */
    constructor(private from: User, private content: string) { }
}