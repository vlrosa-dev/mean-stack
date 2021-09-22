
export class Message {
    messageID?: string;
    content: string;
    userId?: string;
    username: string;

    constructor(messageId: string, content: string, userId: string, username: string){
        this.messageID = messageId;
        this.content = content;
        this.userId = userId;
        this.username = username;
    }
}
