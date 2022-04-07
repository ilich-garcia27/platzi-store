import { Product } from './models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentImg = 'https://source.unsplash.com/random';
  showImg = true;
  products: Product[] = [
    {
      id: '1',
      name: 'The best toy',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      id: '2',
      name: 'Almost brand new bike',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Albums collection',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'My books',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      id: '5',
      name: 'Dog\'s house',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      id: '6',
      name: 'Glasses',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];

  onLoaded(img: string) {
    console.log('Parent log', img);
  }

  toggleImage() {
    this.showImg = !this.showImg;
  }
}
