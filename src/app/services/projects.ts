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


//   project: ProjectInterface;

//   getProjects(): Observable<Project[]> {
//     // return of(projects);
//   }

//   getProject(id: number): ProjectInterface {
//     ProjectData.map((val: ProjectInterface) => {
//       if (val.id === id) this.project = val
//     })
//     return this.project;
//   }