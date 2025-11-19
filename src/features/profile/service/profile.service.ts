import { HttpClient } from '@angular/common/http';
import { API_URL } from './../../../token';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly API_URL = inject(API_URL) ;  
  private readonly httpClient = inject(HttpClient) ;  
  private readonly router = inject(Router) ;  




  getUserByUserId( userId:string) :Observable<Profile> {
    return this.httpClient.get<Profile>(this.API_URL +`GetUserByUserId?userId=${userId}`) ;
  }


  signOut(){
    localStorage.removeItem('userId') ;
    this.router.navigate(['zomato']);
  }

}
