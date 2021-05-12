import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ImageloaderService } from 'src/app/services/imageloader.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnDestroy {
  @Input() id: string;
  imgArr = []



  constructor(private projectService: ImageloaderService) { }
  getImages() {
    this.projectService.getImages(this.id).subscribe(
      data => {
        data.items.map(
          val => {
            val.getDownloadURL().then(
              imagePath => {
                this.imgArr.push({ image: imagePath, thumbImage: imagePath })
              }
            )
          }
        )
      }
    );
  }

  ngOnInit(): void {
    this.getImages();
  }

  ngOnDestroy(): void {
    this.imgArr = [];
  }
}
