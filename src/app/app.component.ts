import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentImg = 'https://source.unsplash.com/random';
  showImg = true;

  onLoaded(img: string) {
    console.log('Parent log', img);
  }

  toggleImage() {
    this.showImg = !this.showImg;
  }
}
