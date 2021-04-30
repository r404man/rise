import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  bgClass;

  constructor(private router: Router) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          const eventUrl = /\d+|^\s+|\s+$/g.exec(event.urlAfterRedirects);;
          const currentRoute = (eventUrl || []).join('');
          if (eventUrl !== null) {
            this.bgClass = eventUrl.input.replace(/\d+|^\s+|\s+$/g, '').replace("/", '').replace("/", '');
          }
        }
      }
    )

  }

  ngOnInit(): void {
  }

}
