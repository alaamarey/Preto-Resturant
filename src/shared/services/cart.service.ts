import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../token';
import { HttpClient } from '@angular/common/http';
import { Cart, GetCart, GetCartDetails, Resturant } from '../../features/mewnuitemdetails/models/cart.interface';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  private readonly httpClient = inject(HttpClient)
  private readonly API_URL = inject(API_URL)

  cartItems : WritableSignal<GetCartDetails[]>  = signal([]) ;
  myRealCartItems : WritableSignal<number> = signal(0);


  getCartItemsByCustomerIdForRestaurant(customerId: number, resturantId: number): Observable<GetCart> {
    return this.httpClient.get<GetCart>(this.API_URL + `GetCartItemsByCustomerIdForRestaurant?customerId=${customerId}&restaurantId=${resturantId}`);
  }




  addToCart(body: object): Observable<Cart> {
    return this.httpClient.post<Cart>(this.API_URL + 'AddToCart', body);
  }


  getAllResturant(): Observable<Resturant> {
    return this.httpClient.get<Resturant>(this.API_URL + 'GetAllRestaurant');
  }



  updateCartQuantity(body: object): Observable<Cart> {
    return this.httpClient.post<Cart>(this.API_URL + 'UpdateCartQuantity', body);
  }




}
