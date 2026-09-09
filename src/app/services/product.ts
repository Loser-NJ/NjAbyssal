import { Injectable } from '@angular/core';
import { Product as ProductInterface } from '../initialization/product.interface';

@Injectable({
  providedIn: 'root'
})
export class Product {

  products: ProductInterface[] = [
    {
      id: 1,
      name: 'ABY-001 "The Hollow Man"',
      image: 'assets/hollowman.jpg',
      price: 8999,
      description: 'A humanoid anomaly with an unnaturally empty appearance. The entity demonstrates unusual behavior when observed directly.'
    },
    {
      id: 2,
      name: 'ABY-014 "Gravejaw"',
      image: 'assets/gravejaw.jpg',
      price: 6499,
      description: 'A highly aggressive predatory anomaly possessing an oversized jaw and exceptional night vision.'
    },
    {
      id: 3,
      name: 'ABY-027 "The Red Maw"',
      image: 'assets/redmaw.jpg',
      price: 7299,
      description: 'A biological anomaly characterized by a large crimson mouth and extreme regenerative abilities.'
    },
    {
      id: 4,
      name: 'ABY-039 "Null"',
      image: 'assets/null.jpg',
      price: 4999,
      description: 'An unidentified anomaly that appears to distort its surroundings. Its origin and abilities remain unknown.'
    }
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find(product => product.id === id);
  }
}