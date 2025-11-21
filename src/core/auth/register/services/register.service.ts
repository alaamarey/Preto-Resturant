import { inject, Injectable } from '@angular/core';
import { API_URL } from '../../../../token';
import { Observable } from 'rxjs';
import { Register } from '../models/register.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.API_URL);
    
  }

  private readonly API_URL = inject(API_URL);
  private readonly httpClient = inject(HttpClient);




  signUp(body: object): Observable<Register>{
    return this.httpClient.post<Register>(this.API_URL + 'AddNewUser', body);
  }





}
