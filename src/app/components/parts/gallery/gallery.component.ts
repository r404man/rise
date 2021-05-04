import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnDestroy {
  @Input() imgArr = [];

  concept = [];

  constructor() { }
  ngOnInit(): void {
    this.imgArr.forEach(img => {
      console.log(img.url)
      img = new Image(img.url, img.url);
      this.concept.push(img);
    });
    
    console.log(this.concept[0])
  }
  
  ngOnDestroy(): void {
    this.imgArr = [];
  }
}

class Image {
  constructor(image: string, thumbImage: string) {
    this.image = image;
    this.thumbImage = thumbImage
  }
  image: string
  thumbImage: string
}