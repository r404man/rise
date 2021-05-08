import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { MessageService } from 'src/app/services/message.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  // msgHeaders: string[];
  // msgFields: string[];
  messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  getMessages() {
    this.messageService.getMessages().subscribe(
      data => {
        this.messages = data.map(val => {
          let messageInfo = val.payload.doc.data() as Message;
          let messageItem = { id: val.payload.doc.id, ...messageInfo }
          // console.log(messageItem)
          // this.messages.push(messageItem);
          return messageItem as Message;
        })

        return this.messages;
      },
    )
  }

  ngOnInit(): void {
    console.log(this.messages);
    this.getMessages();
  }

}
