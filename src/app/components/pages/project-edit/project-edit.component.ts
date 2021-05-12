import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import { ImageloaderService } from 'src/app/services/imageloader.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  isDelete:boolean = null;
  isSuccess: boolean = null;
  persentage: number;
  
  project: Project = null;
  projectThumb;
  imgArr = [];
  id: string;

  constructor(private projectService: ImageloaderService,
    private route: ActivatedRoute,
    private location: Location) { }

  getProject() {
    this.projectService.getProjectDetail(this.id).subscribe(
      data => {
        this.project = data.data() as Project;
      }
    );
    this.projectService.getProjectThumb(this.id).subscribe(
      data => {
        this.projectThumb = data;
      }
    )
  }

  editData(form: NgForm) {
    this.projectService.editData(this.id, { ...form.value }).then(
    ).finally(
      () => {
        this.isSuccess = true;
        this.location.back();
      }
    );
  }

  editThumb(event) {
    const thumb = event.target.files[0];
    this.projectService.deleteThumb(this.id);
    this.projectService.setThumb(this.id, thumb).subscribe(
      data => {
        this.persentage = data;
        if (data === 100) {
          this.projectService.getProjectThumb(this.id).subscribe(
            data => {
              this.projectThumb = data;
            }
          )
        }
      }
    );
  }

  getImages() {
    this.projectService.getImages(this.id).subscribe(
      data => {
        data.items.map(val => {
          val.getDownloadURL().then(
            imgPath => this.imgArr.push({ url: imgPath, imgName: val.name })
          )
        })
      }
    )
  }

  deleteImage(img) {
    this.projectService.deleteImage(this.id, img.imgName).subscribe(
      data => {
        this.isDelete = true;
      }
    );
  }


  editImages(event) {
    // console.log(event.target.files)
    const imgFiles = event.target.files;
    console.log(imgFiles);
    this.projectService.editImages(imgFiles, this.id).subscribe(
      data => {
        // console.log(data);
      }
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('projectId');
    this.getProject();
    this.getImages();
  }

}
