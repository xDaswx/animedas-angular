import { NgModule } from '@angular/core';
import { RouterModule, Routes,UrlSegment, UrlMatchResult } from '@angular/router';
import { Container2Component } from './components/container2/container2.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'gallery/:type',component:GalleryComponent},
  {path:'preview/:id',component:ImagePreviewComponent},

  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
