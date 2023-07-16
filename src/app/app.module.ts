import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { ContainerComponent } from './components/container/container.component';
import { Container2Component } from './components/container2/container2.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryHeaderComponent } from './components/gallery-header/gallery-header.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { DocsComponent } from './pages/docs/docs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    ContainerComponent,
    Container2Component,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
    GalleryHeaderComponent,
    ImagePreviewComponent,
    DocsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
