import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs'

import { projects } from '../../mock-project';
import { Project } from '../interfaces/project';

import { ProjectW } from '../../mock-projects-w';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {
  project: Project;
  constructor() { }

  getProjects() {
    console.log(projects);
    return of(projects);
  }

  getProject(id: number) {
    ProjectW.map((val: Project) => { val.id === id; this.project = val });
    return this.project;
  }
}
