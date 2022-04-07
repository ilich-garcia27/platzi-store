import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
