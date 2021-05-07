import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/projects';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public router: Router,private projectService: ProjectService) {}

  ngOnInit() {
    if(this.projectService.isAuth) {

    } else {
      // alert('access denied');
      this.router.navigateByUrl('/admin/auth');      
    }
    console.log('/admin')
  }

}
