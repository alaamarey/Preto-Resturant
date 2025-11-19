import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputNumber } from 'primeng/inputnumber';
import { ProgressSpinner } from 'primeng/progressspinner';
import { TextareaModule } from 'primeng/textarea';
import { Toast } from 'primeng/toast';
import { ValidatorComponent } from "../../core/auth/register/components/validator/validator.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { SliderComponent } from "../../shared/components/slider/slider.component";
import { CartService } from '../../shared/services/cart.service';
import { CategroyData, FoodItem } from '../ourfood/components/foodcategroy/models/foodcategroy.interface';
import { CategroyService } from '../ourfood/components/foodcategroy/service/categroy.service';
import { GetCartDetails } from './models/cart.interface';
import { map, mergeMap, from, toArray } from 'rxjs';




@Component({
  selector: 'app-mewnuitemdetails',
  imports: [SliderComponent, CardModule, CurrencyPipe, ProgressSpinner, AvatarModule, FormsModule, ButtonComponent, ButtonComponent, RouterLink, InputNumber, Toast, DialogModule, TextareaModule, ReactiveFormsModule, ValidatorComponent, Button],
  templateUrl: './mewnuitemdetails.component.html',
  styleUrl: './mewnuitemdetails.component.css',
  providers: [MessageService]
})
export class MewnuitemdetailsComponent implements OnInit {
  backgroundImages = signal([
    '/assets/md1.webp',
    '/assets/md2.webp',
    '/assets/md3.webp'
  ])

  popUp: boolean = false;

  private readonly categroyService = inject(CategroyService);
  private readonly cartService = inject(CartService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly messageService = inject(MessageService);

  private categroyId: WritableSignal<string> = signal('');


  categroyItems: WritableSignal<FoodItem[]> = signal([]);
  firstCategroyItem: WritableSignal<CategroyData> = signal({} as CategroyData);
  cartMessage: WritableSignal<string> = signal('');
  showMessageCart = signal(false)


  ngOnInit(): void {
    this.getResturantId();
    this.getFoodItemByCategroy();
    this.getServiceByCategroyId();
  }



  getResturantId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params => {
        this.categroyId.set(params.get('categroyId')!)
        console.log(this.categroyId());
      })
    })
  }


  getFoodItemByCategroy(): void {
    this.categroyService.getFoodItemByCategroy(this.categroyId())
      .subscribe({
        next: (resposne => {
          if (resposne.result === true) {
            this.categroyItems.set(resposne.data);
          }
          console.log(this.categroyItems());
          console.log(resposne);

        })
      })
  }




  getServiceByCategroyId(): void {
    this.categroyService.getServiceByCategroyId(this.categroyId()).subscribe({
      next: (response => {
        console.log(response);
        this.firstCategroyItem.set(response.data[1])
      })
    })
  }






  addToCart(itemId: number) {
    const cartDetails = {
      customerId: JSON.parse(localStorage.getItem('userId')!),
      itemId: itemId,
      quantity: 1
    }
    this.cartService.addToCart(cartDetails).subscribe({
      next: (response => {
        if (response.result === true) {
          // cartLength.update((value) => value + 1)
          this.cartMessage.set(response.message);
          this.showConfirm();
          console.log(response);
          localStorage.setItem('makeOrder' , JSON.stringify(false) );

          this.getAllGesturantsId()
        }

      })
    }
    )
  }





  onReject() {
    this.messageService.clear('confirm');
  }

  showConfirm() {
    if (!this.popUp) {
      this.messageService.add({
        key: 'confirm', sticky: true,
        severity: 'success',
        summary: this.cartMessage()
      });
    }

  }



  getAllGesturantsId(): void {
  const customerId = JSON.parse(localStorage.getItem('userId')!)
      this.cartService.getAllResturant().pipe(
        map(resturants => resturants.data.map(resturant => resturant.restaurantID))
        , mergeMap(resturantIds => from(resturantIds).pipe(
          mergeMap(resturantId => this.cartService.getCartItemsByCustomerIdForRestaurant(customerId, resturantId).pipe(
            map(cartItemsWithResturantId => cartItemsWithResturantId.data)
          )), toArray()
        ))
      ).subscribe({
        next: (resposne => {
          this.cartService.cartItems.set(resposne.flat()) ;
          console.log(this.cartService.cartItems());
            }),
      })
    }
}



