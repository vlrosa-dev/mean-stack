import { Component } from "@angular/core";
import { MessageService } from "../message.services";
import { Message } from "../message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    //providers: [MessageService]
})

export class MessageInputComponent{

    constructor (private messageSerice: MessageService){

    }

    onSave(textoConsole: string){
        const messageAux = new Message(undefined, textoConsole, undefined, "Victor");
        this.messageSerice.addMessage(messageAux);
        console.log(textoConsole);
    }
    
}