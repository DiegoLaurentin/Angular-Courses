import { Component, OnInit, Input } from '@angular/core';

import {
  Product,
  CreateProductDTO,
} from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input() products: Product[] = [];

  constructor(
  
  ) { }



}
