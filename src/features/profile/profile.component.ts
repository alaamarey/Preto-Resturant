import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProfileService } from './service/profile.service';
import { ProfileData } from './models/profile.interface';
import { OrderService } from '../../shared/services/order.service';
import { UserDataOrder } from '../../shared/models/order.interface';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from "../../shared/components/button/button.component";



@Component({
  selector: 'app-profile',
  imports: [CardModule, AccordionModule, DatePipe, ButtonComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent  implements OnInit{


  private readonly profileService = inject(ProfileService);
  private readonly orderService = inject(OrderService);

  userId: WritableSignal<string> = signal(localStorage.getItem('userId')!);
  userData: WritableSignal<ProfileData> = signal({} as ProfileData);
  userDataOrder: WritableSignal<UserDataOrder[]> = signal([]);



  ngOnInit(): void {
    this.getUserByUserId();
    this.getAllOrdersByUserId();
  }



  getUserByUserId(): void {
    if (this.userId() !== null) {
      this.profileService.getUserByUserId(this.userId()).subscribe({
        next: (response => {
          if (response.result === true) {
            this.userData.set(response.data);
            console.log(response);
          }
        })
      })
    }
  }




  getAllOrdersByUserId(): void {
    this.orderService.getAllOrdersByUserId(this.userId()).subscribe({
      next: (response => {
        if (response.result === true) {
          this.userDataOrder.set(response.data)
        }
        console.log(response);
      })
    })
  }





signOut() {
this.profileService.signOut();  
}







}


