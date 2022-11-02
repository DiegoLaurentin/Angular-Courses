import { Component, OnInit, Input } from '@angular/core';

import {
  Product,
  UpdateProductDTO,
} from '../../../models/product.model';

import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  @Input() product: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: -1,
      name: '',
    },
    description: ''
  };

  @Input() products: Product[] = [];

  productChosen: Product | null = null;

  constructor(
    private productsService: ProductsService
  ) { }


  deleteProduct() {
    if (this.productChosen) {
      const id = this.productChosen?.id;
      this.productsService.delete(id).subscribe(() => {
        const productIndex = this.products.findIndex(
          (item) => item.id === this.productChosen?.id
        );
        this.products.splice(productIndex, 1);
      });
    }
  }
}
