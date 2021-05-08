import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Message } from '../../../interfaces/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-callbackform',
  templateUrl: './callbackform.component.html',
  styleUrls: ['./callbackform.component.scss']
})

export class CallbackformComponent implements OnInit {
  msgText: Message;
  errAllert: string = null;

  constructor(private messageService: MessageService) { }

  sendData(form: NgForm) {
    this.msgText = form.value;
    this.messageService.addMsg(this.msgText)
      .then(val => {
        if (val) {
          this.errAllert = "Ваше сообщение доставлено!";
          form.reset();
        }
      })
      .catch(err => console.error(err));
  }

  ngOnInit(): void {
  }

}
