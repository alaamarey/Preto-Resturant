import { inject, Injectable } from '@angular/core';
import { API_URL } from '../../token';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu, MenuDaum } from '../models/menu.interface';


@Injectable({
  providedIn: 'root'
})
export class MenusService {
  

private readonly API_URL = inject(API_URL) ;
private readonly httpClient = inject(HttpClient);






getAllMenu() :Observable<Menu> {
return  this.httpClient.get<Menu>( this.API_URL + 'GetAllMenu') ;
}


getAllMenuByResturantId(resturantId:string):Observable<Menu> {
  return this.httpClient.get<Menu>( this.API_URL + `GetAllMenuByRestaurantId?restaurantId=${resturantId}`)
}






}
