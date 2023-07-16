import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  phrases = [
    'Expand Your Anime Image Library with an Additional API Integration',
    'Discover a Second API Source for Anime Icons on Our Website',
    'Level up Your Anime Image Repository with a Second API Connection',
    'Access a Diverse Selection of Anime Icons with Another API Integration']

  random = Math.floor(Math.random() * this.phrases.length)
  home = {
    title:this.phrases[this.random]
  }
}
