import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: false,
})
export class ProductPage implements OnInit {

  product: any;

  constructor(
  private productService: Product,
  private route: ActivatedRoute
) { }

  ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.product = this.productService.getProduct(id);
}

}