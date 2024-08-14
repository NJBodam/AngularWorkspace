

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
      this.productList = res.data;
    });
  }

  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  navigateToProducts(id: number) {
    this.router.navigate(['/products', id]);
  }

  addToCart(productId: number) {
    const addToCartObj = {
      "CartId": 0,
      "CustId": 379,
      "ProductId": productId,
      "Quantity": 1,
      "AddedDate": new Date()
    }
    console.log(addToCartObj);
    this.productSrv.addToCart(addToCartObj).subscribe((res: any) => {
      if(res.status == 200) {
        alert('Product added to cart successfully');
        debugger;
        this.productSrv.cartUpdated$?.next(true);         // makes the cart updated
        console.log(this.productSrv.cartUpdated$);
      } else {
        alert(res.message);
      }
    })
  }


}

