import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  productList: any = [] = [];
  categoryList: any = [] = [];
  cartList: any = [] = [];


  constructor(private productSrv: ProductService, private router: Router) {
    // updating cart live
    this.productSrv.cartUpdated$?.subscribe((res: any) => {
      this.getCartByCustomer(); // whenever add to cart is clicked, this will be called
    });
  }


  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
    this.getCartByCustomer();
  }

  getAllProducts() {
    this.productSrv.getProducts().subscribe((res: any) => {
      this.productList = res.data;
    });
  }

  getCartByCustomer() {
    this.productSrv.getCartByCusId(379).subscribe((res: any) => {
      this.cartList = res.data;
    });
  }

  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  remove(id: number) {
    this.productSrv.removeProductById(id).subscribe((res: any) => {
      this.getCartByCustomer();
    });
  }

  navigateToProducts(id: number) {
    this.router.navigate(['/products', id]);
  }

}
