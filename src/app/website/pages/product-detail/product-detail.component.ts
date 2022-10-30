import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = null
  product: Product | null = null

  constructor(
    // private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private storeService: StoreService
  ) { }

  @Output() addedProduct = new EventEmitter<Product>();

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.productId = params.get('id')
        if (this.productId) {
          return this.productsService.getOne(this.productId)
        }
        return [null];
      })
    )
    .subscribe((data) => {
      this.product = data;
    })
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
  }



  onSwiper([swiper]: string) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  goToBack() {
    this.location.back();
  }

}

