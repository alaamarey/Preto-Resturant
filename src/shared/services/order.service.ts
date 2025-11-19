import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { API_URL } from '../../token';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order, UserOrder } from '../models/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly httpClient = inject(HttpClient);
  private readonly API_URL = inject(API_URL);




  addNweOrder(body: object): Observable<Order> {
    return this.httpClient.post<Order>(this.API_URL + 'AddNewOrder', body);
  }


  getAllOrdersByUserId(userId : string ) : Observable<UserOrder> {
    return this.httpClient.get<UserOrder>(this.API_URL +`GetAllOrdersByUserId?userId=${userId}`) ;
  }



}
