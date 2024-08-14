

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-webproduct',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './webproduct.component.html',
  styleUrl: './webproduct.component.css'
})
export class WebproductComponent implements OnInit {

  productList: any = [] = [];
  categoryList: any = [] = [];

  constructor(private productSrv: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  getAllProducts() {
    this.productSrv.getProducts().subscribe((res: any) => {
      // debugger
      this.productList = res.data;
    });
  }

  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      // debugger
      this.categoryList = res.data;
    });
  }

  navigateToProducts(id: number) {
    this.router.navigate(['/products', id]);
  }


}

