import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../../../../../token';
import { Observable } from 'rxjs';
import { CategroiesRoot, CategroyData, Foodcategroy, FoodItemCategroy } from '../models/foodcategroy.interface';

@Injectable({
  providedIn: 'root'
})
export class CategroyService {
  

  private readonly httpClient = inject(HttpClient);
  private readonly API_URL = inject(API_URL);



  getAllFoodCategory(): Observable<Foodcategroy> {
    return this.httpClient.get<Foodcategroy>(this.API_URL +  'GetAllFoodCategory'); 
  }




  getFoodItemByCategroy(categoryId: string): Observable<FoodItemCategroy> {
     return this.httpClient.get<FoodItemCategroy>( this.API_URL + `GetFoodItemByCategory?categoryId=${categoryId}`)
}


getServiceByCategroyId(categroyId:string) : Observable<CategroiesRoot> {
  return this.httpClient.get<CategroiesRoot>(this.API_URL + `GetRestaurantServingByCategoryId?categoryId=${categroyId}`)
}




}
