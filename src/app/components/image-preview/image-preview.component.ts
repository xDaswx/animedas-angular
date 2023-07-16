import { Component } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent {

  animePreview=''

  constructor(private galleryService:GalleryService, private activatedRoute:ActivatedRoute){
    this.GetAnimeInfo()
  }
  GetAnimeInfo(){
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.galleryService.GetAnimeInfoById(id)
  }


}
