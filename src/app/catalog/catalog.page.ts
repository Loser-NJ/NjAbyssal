import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
  standalone: false,
})
export class CatalogPage implements OnInit {

  products: any[] = [];

  constructor(private productService: Product) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}