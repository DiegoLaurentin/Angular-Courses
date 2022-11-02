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
    id: '2',
    price: 631,
    images: [],
    title: 'Refined Fresh Computer',
    category: {
      id: 2,
      name: '',
    },
    description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support'
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
