import { StoreService } from './../../services/store.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  shoppingCart: Product[] = [];
  total: number = 0;
  products!: Product[];

  constructor(private storeService: StoreService, private productsService: ProductsService) {
    this.shoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }

  addToCart(product: Product) {
    this.storeService.addToCart(product);
    this.total = this.storeService.getTotal();
  }
}
