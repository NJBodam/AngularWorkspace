import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(Constant.API_URL + Constant.METHODS.GET_ALL_CATEGORY)
    .pipe(
      catchError((error) => {
        console.error('Error in getCategory', error);
        return throwError(error);
      })
    );
  }

  getProducts() {
    return this.http.get(Constant.API_URL + Constant.METHODS.GET_ALL_PRODUCT)
    .pipe(
      catchError((error) => {
        console.error('Error in getProducts', error);
        return throwError(error);
      })
    );
  }

  saveProduct(obj: any) {
    return this.http.post(Constant.API_URL + Constant.METHODS.CREATE_PRODUCT, obj)
    .pipe(
      catchError((error) => {
        console.error('Error in saveProduct', error);
        return throwError(error);
      })
    );
  }

  updateProduct(obj: any) {
    return this.http.post(Constant.API_URL + Constant.METHODS.UPDATE_PRODUCT, obj)
    .pipe(
      catchError((error) => {
        console.error('Error in updateProduct', error);
        return throwError(error);
      })
    );
  }

  deleteProduct(id: number) {
    return this.http.get(Constant.API_URL + Constant.METHODS.DELETE_PRODUCT + id)
    .pipe(
      catchError((error) => {
        console.error('Error in deleteProduct', error);
        return throwError(error);
      })
    );
  }

}
