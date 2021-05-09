import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImageloaderService } from 'src/app/services/imageloader.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {
  fileList: Object | null;
  imageList: boolean = false;

  constructor(public imageService: ImageloaderService) { }

  upload(event) {
    this.fileList = event.target.files;
  }

  x(f: NgForm) {
    console.log(this.fileList)
    console.log(f.value);
  }
  ngOnInit(): void {
  }

}
