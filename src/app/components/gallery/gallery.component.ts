import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router} from "@angular/router";
import { GalleryService } from 'src/app/services/gallery.service';
import { AnimeList } from 'src/app/types/AnimeResponseMany';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  animeList?:AnimeList
  pathAnimeType:string = ''
  allowPaths:Array<String> = ['random','maid','waifu','smug','genshin']

  constructor(private galleryService:GalleryService,public router: Router,private location: Location){
    this.pathAnimeType = this.location.path().split('/')[2] 
  }

  ngOnInit(){
    
    if (!this.allowPaths.includes(this.pathAnimeType)){
        this.router.navigate(['/home']);
        return
    }
    this.galleryService.getMany(this.pathAnimeType).subscribe((anime)=> (this.animeList = anime))

  }

}
