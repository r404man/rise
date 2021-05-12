import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import { ImageloaderService } from 'src/app/services/imageloader.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(private projectService: ImageloaderService) { }

  projects;

  getProjects() {
    this.projectService.getProjects().subscribe(
      data => {
        this.projects = data.map(
          (projecItem) => {
            return {
              id: projecItem.payload.doc.id,
              ...projecItem.payload.doc.data() as Project
            } as Project
          }
        )
      }
    )
  }


  deleteProject(id:string) {
    this.projectService.deleteProject(id);
  }
  

  ngOnInit(): void {
    this.getProjects();
  }


}
