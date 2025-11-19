import { inject, Injectable } from '@angular/core';
import { API_URL } from '../../../../token';
import { Observable } from 'rxjs';
import { Register } from '../models/register.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  

  private readonly API_URL = inject(API_URL);
  private readonly httpClient = inject(HttpClient);




  signUp(body: object): Observable<Register>{
    return this.httpClient.post<Register>(this.API_URL + 'AddNewUser', body);
  }





}
