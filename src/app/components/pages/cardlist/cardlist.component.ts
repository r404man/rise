import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
// import { ProjectService } from '../../../services/projects';
import { ImageloaderService } from '../../../services/imageloader.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {
  projects: Project[];
  projectCounter:boolean = false;

  constructor(public projectService: ImageloaderService) { }


  getProjects() {
    this.projectService.getProjects().subscribe(
      data => {
        this.projects = data.map(val => {
          return {
            id: val.payload.doc.id,
            ...val.payload.doc.data() as Object
          } as Project;
        })

        if(this.projects.length >= 2) {
          this.projectCounter = true;
        } 
      },
    );
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
