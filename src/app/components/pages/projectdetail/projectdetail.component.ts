import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common'


import { Project } from 'src/app/interfaces/project';
import { ProjectserviceService } from 'src/app/services/projectservice.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {
  project;
  imgSrc;

  constructor(private projectService: ProjectserviceService, private route: ActivatedRoute, private location: Location) { }

  getProject() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProject(id);
    this.imgSrc = this.project.img;
  }
  
  goBack() {
    this.location.back();
  }
  
  ngOnInit(): void {
    this.getProject();
  }
  

}
