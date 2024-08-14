import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { catchError, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // To make add to cart get live updates
  //
  public cartUpdated$: Subject<boolean> = new Subject();

  getCategory() {
    return this.http.get(Constant.API_URL + Constant.METHODS.GET_ALL_CATEGORY)
    .pipe(
      catchError((error) => {
        console.error('Error in getCategory', error);
        return throwError(error);
      })
    );
  }

  removeProductById(id: number) {
    return this.http.get(Constant.API_URL + Constant.METHODS.REMOVE_PRODUCT_FROM_CART + id)
    .pipe(
      catchError((error) => {
        console.error('Error in removeProductById', error);
        return throwError(error);
      })
    );
  }

  getByCategoryId(id: number) {
    return this.http.get(Constant.API_URL + Constant.METHODS.GET_ALL_PRODUCT_BY_CATEGORY_ID + id)
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

  addToCart(obj: any) {
    return this.http.post(Constant.API_URL + Constant.METHODS.ADD_TO_CART, obj)
    .pipe(
      catchError((error) => {
        console.error('Error in addToCart', error);
        return throwError(error);
      })
    );
  }

  getCartByCusId(custId: number) {
    return this.http.get(Constant.API_URL + Constant.METHODS.GET_CART_BY_CUS_ID + custId)
    .pipe(
      catchError((error) => {
        console.error('Error in addToCart', error);
        return throwError(error);
      })
    );
  }

}
