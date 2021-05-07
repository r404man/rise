import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs'

import { projects } from '../../mock-project';
import { Project } from '../interfaces/project';

import { ProjectW as ProjectData } from '../../mock-projects-w';
import { ProjectW as ProjectInterface } from '../interfaces/projectW';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  project: ProjectInterface;
  isAuth: boolean = false; 

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(projects);
  }

  getProject(id: number): ProjectInterface {
    ProjectData.map((val: ProjectInterface) => {
      if (val.id === id) this.project = val
    })
    return this.project;
  }

  auth(username: string, password: string): void {
    if (username === 'root' && password === 'root') {
      this.isAuth = true;
    }
  }
}
