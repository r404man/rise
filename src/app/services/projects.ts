import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs'
import { AngularFirestore } from '@angular/fire/firestore';

import { projects } from '../../mock-project';
import { Project } from '../interfaces/project';

import { ProjectW as ProjectData } from '../../mock-projects-w';
import { ProjectW as ProjectInterface } from '../interfaces/projectW';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  project: ProjectInterface;
  isAuth: boolean = false;

  constructor(private firestore: AngularFirestore) { }

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

  putMsg(x: Message) {
    console.log(x)
    return this.firestore.collection('messages').add(x);
  }
}
