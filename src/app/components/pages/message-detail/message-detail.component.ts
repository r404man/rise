import { Message } from '../../../interfaces/message';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {

  constructor(private messageService: MessageService, private route: ActivatedRoute, private location: Location) { }

  message: any = null;

  getMessage() {
    const id: string = this.route.snapshot.paramMap.get('messageId');
    this.messageService.getMsgDetail(id).subscribe(res => {
      this.message = res;
    })
  }

  clipToBoard() {
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.getMessage()
  }

}
