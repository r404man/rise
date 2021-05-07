import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/projects';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public errMsg: string;

  constructor(public router: Router, private projectService: ProjectService) { }

  auth(form: NgForm) {
    let { username, password } = form.value;
    if (form.valid) {
      this.projectService.auth(username, password);
      if (this.projectService.isAuth) {
        this.router.navigateByUrl('/admin/main-page');
      } else {
        this.errMsg = 'Неверный логин или пароль';
      }
    } else {
      this.errMsg = 'Введите корректные данные';
    }
  }


  ngOnInit(): void {

  }

}
