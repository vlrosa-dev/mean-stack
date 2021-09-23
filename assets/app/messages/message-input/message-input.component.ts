import { Component } from "@angular/core";
import { MessageService } from "../message.services";
import { Message } from "../message.model";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    //providers: [MessageService]
})

export class MessageInputComponent{

    constructor (private messageSerice: MessageService){

    }

    onSubmit(form: NgForm){
        const messageAux = new Message(undefined, form.value.myContentngForm, undefined, "Victor");
        this.messageSerice.addMessage(messageAux);
        console.log(form);
    }
    
}