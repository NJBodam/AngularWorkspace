import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

// Creating Observable
// Observable is a representation of any set of values over any amount of time. This is the most common way to handle asynchronous programming in Angular.
  products$: Observable<any>;
  constructor(private productSrv: ProductService) {
    this.products$ = this.productSrv.getCategory().pipe(
      map((item: any) => {
        return item.data;
      })
    );
   }

  getAllCategory() {

  }


  ngOnInit(): void {
  }

}
