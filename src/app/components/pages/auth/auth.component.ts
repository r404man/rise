import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public errMsg: string;

  constructor(public router: Router) { }

  auth(form: NgForm) {
    let { username, password } = form.value;
    if (form.valid) {
      if (username === 'root' && password === 'root') {
        this.router.navigateByUrl('admin/main');
      } else {
        this.errMsg = 'Invalid data';
      }
      
    } else {
      this.errMsg = 'Error';
    }
  }


  ngOnInit(): void {

  }

}
