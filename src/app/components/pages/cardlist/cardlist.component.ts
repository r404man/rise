import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from '../../../services/projects';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {
  projects: Project[];

  constructor(public projectService: ProjectService) { }

  getProjectService() {
    this.projectService.getProjects().subscribe(val => this.projects = val);
  }

  ngOnInit(): void {
    this.getProjectService();
  }

}
