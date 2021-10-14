
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Message } from './message.model'
import { MessageService } from './message.services';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent{

    color = 'yellow'

    @Input() messageVarClasse : Message = new Message("", "", "", "");

    @Input('inputMessage') messageVarClasseAlias : Message = new Message("", "", "", "");

    constructor(private messageServiceObj: MessageService){}
    
    onDelete(){
        this.messageServiceObj.deleteMessage(this.messageVarClasse);
    }

    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();

    @Output('outputMessage') editCliked_MessageMetodoClasseAlias = new EventEmitter<string>();

    onEdit(){
        this.editClicked_MessageMetodoClasse.emit("Texto veio de message (child) para o app (pai)");
        this.editCliked_MessageMetodoClasseAlias.emit("Texto veio de message (child) para o app (pai) - Alias")
    }

}