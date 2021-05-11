import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageloaderService } from 'src/app/services/imageloader.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() Item;
  thumbUrl: Observable<string>;

  constructor(private projectService: ImageloaderService) { }
  
  getThumb() {
    this.projectService.getProjectThumb(this.Item.id).subscribe(
      data => {
        this.Item.url = data;
      }
    )
  }

  ngOnInit(): void {
    this.getThumb()
  }

}
