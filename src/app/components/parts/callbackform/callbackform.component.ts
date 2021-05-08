import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ProjectService } from 'src/app/services/projects';

@Component({
  selector: 'app-callbackform',
  templateUrl: './callbackform.component.html',
  styleUrls: ['./callbackform.component.scss']
})

export class CallbackformComponent implements OnInit {
  msgText: Message;

  constructor(private projectService: ProjectService) { }

  sendData(form: NgForm) {
    this.msgText = form.value;
    this.projectService.putMsg(this.msgText).then(x => console.log(x));
  }

  ngOnInit(): void {
  }

}
