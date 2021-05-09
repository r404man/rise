import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: any = null;

  constructor(private messageService: MessageService, private router: Router, private location: Location) { }

  getMessages() {
    this.messageService.getMessages().subscribe(
      data => {
        this.messages = data.map(val => {
          let messageInfo = val.payload.doc.data() as Message;
          let messageItem: Message = { id: val.payload.doc.id, ...messageInfo }
          return messageItem;
        })
      },
    )
  }

  deleteMessage(id:string) {
    this.messageService.deleteMessage(id);
  }

  goBack() {
    this.location.back()
  }

  ngOnInit(): void {
    this.getMessages();
  }

}
