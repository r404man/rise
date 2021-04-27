import { Component, HostListener, OnInit } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  mouse: { x: number, y: number } = { x: 0, y: 0 }
  underElem: HTMLElement;
  project: HTMLElement;

  cursor: HTMLDivElement;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: any) {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;

    this.cursor.style.left = this.mouse.x + 'px';
    this.cursor.style.top = this.mouse.y + 'px';

    this.underElem = event.target;


    gsap.to(this.cursor, {
      duration: 1,
      opacity: 1,
      ease: 'Power3.easeOut'
    })


  }



  ngOnInit(): void {
    this.cursor = document.querySelector('.cursor');
    this.project = document.querySelector('h1');
  }

}
