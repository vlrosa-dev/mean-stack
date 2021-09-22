import { Component } from '@angular/core';
import { Message } from './messages/message.model';
import { MessageService } from './messages/message.services';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MessageService]
})

export class AppComponent {

    messageS: Message[] = [
        new Message("100", "Programação Avançada pra WEB", "01", "Vinicius Rosalen"),
        new Message("100", "Engenharia de Software", "02", "Cristian Biancardi"),
        new Message("100", "Engenharia Transformacional", "03", "Emerson")
    ];
    
}