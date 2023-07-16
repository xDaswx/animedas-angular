import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { ActivatedRoute } from '@angular/router';
import { animePreview } from 'src/app/types/AnimeResponsePreview';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {
  ImagePreview?: animePreview;

  constructor(private galleryService: GalleryService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.GetAnimeInfo();
  }

  GetAnimeInfo() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id && !isNaN(Number(id))) {
      this.galleryService.GetAnimeInfoById(parseInt(id)).subscribe((imageinfo) => {
        this.ImagePreview = imageinfo.content === false ? this.getDefaultAnimeInfo() : imageinfo;
      });
    } else {
      this.ImagePreview = this.getDefaultAnimeInfo();
    }
  }

  getDefaultAnimeInfo(): animePreview {
    return {
      message: 'Anime não encontrado',
      content: {
        id: 0,
        tag_type: '',
        source: '',
        url: 'https://preview.redd.it/d1owe2n7ev181.png?width=640&crop=smart&auto=webp&s=42f4aa3bfb8f94d01e37e1f1f49a5fec395f1a46',
        description: 'You have encountered emptiness, there is nothing here.'
      }
    };
  }
}
