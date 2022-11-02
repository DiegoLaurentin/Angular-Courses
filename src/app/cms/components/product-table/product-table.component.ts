import { Component, OnInit, Input } from '@angular/core';

import {
  Product,
} from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent {

  @Input() products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }


}
