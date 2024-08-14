import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
    "userId": 0
  };

  categoryList: any = [] = [];
  productList: any = [] = [];

  constructor(private productSrv: ProductService) {
  }

  isSidePanelVisible: boolean = false;

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();

  }

  onEdit(product: any) {
    this.productObj = product;
    this.openSidePanel();
  }

  onUpdate() {
    this.productSrv.saveProduct(this.productObj).subscribe((res: any) => {
      if(res.status == 200) {
        alert('Product updated successfully');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete this product?');
    if(isDelete) {
      this.productSrv.deleteProduct(id).subscribe((res: any) => {
        if(res.status == 200) {
          alert('Product deleted successfully');
          this.getProducts();
        } else {
          alert(res.message);
        }
      });
    }
  }

  onSave() {
    this.productSrv.saveProduct(this.productObj).subscribe((res: any) => {
      if(res.status == 200) {
        alert('Product saved successfully');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }

  getProducts() {
    this.productSrv.getProducts().subscribe((res: any) => {
      this.productList = res.data;
    });
  }

  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }



}
