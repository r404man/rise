import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() Item;
  constructor() { }

  ngOnInit(): void {
  }

}
