import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AnimeList } from '../types/AnimeResponseMany';
import { animePreview } from '../types/AnimeResponsePreview';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }

  getMany(url:string):Observable<AnimeList> {
    return this.http.get<AnimeList>('https://animedas.up.railway.app/api/v1/many/'+url)
  }

  GetAnimeInfoById(id:number){
    return this.http.get<animePreview>('https://animedas.up.railway.app/api/v1/get/'+id)
  }

}
