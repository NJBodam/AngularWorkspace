import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  standalone: true,
  // Always insert the CommonModule in the imports array when using ngIf, ngFor, or any other angular directives
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {

  // So that we can access the route parameters
  activeCategoryId: number = 0;
  products: any [] = [];
  constructor(private activatedRoute: ActivatedRoute, private producServ: ProductService) {
    this.activatedRoute.params.subscribe((res: any) => {
      this.activeCategoryId = res.id;
      // We need to initiate the function once we have received the category id hence we call the function here
      this.loadProducts();
    })
  }

  loadProducts() {
    this.producServ.getByCategoryId(this.activeCategoryId).subscribe((res: any) => {
      this.products = res.data;
    })
  }

}
