import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  isAuth: boolean = false;
  
  constructor() { }
  
  auth(username: string, password: string): void {
    if (username === 'root' && password === 'root') {
      this.isAuth = true;
    }
  }
  
}
