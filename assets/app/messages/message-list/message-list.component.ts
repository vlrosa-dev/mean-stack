
import { Component } from "@angular/core";
import { Message } from "../message.model";
import { MessageService } from "../message.services";

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
})

export class MessageListComponent {

    messageS: Message[] = [
        new Message("100", "Programação Avançada pra WEB", "01", "Vinicius Rosalen"),
        new Message("100", "Engenharia de Software", "02", "Cristian Biancardi"),
        new Message("100", "Engenharia Transformacional", "03", "Emerson")
    ];

    constructor (private messageService: MessageService){

    }

    ngOnInit(): void {
        this.messageS = this.messageService.getMessages();
    }
    
}