import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProgressSpinner } from 'primeng/progressspinner';
import { finalize, from, map, mergeMap, Subscription, toArray } from 'rxjs';
import { CartService } from '../../shared/services/cart.service';
import { GetCartDetails } from '../mewnuitemdetails/models/cart.interface';
import { InputNumber } from 'primeng/inputnumber';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { OrderService } from '../../shared/services/order.service';
import { DialogModule } from 'primeng/dialog';
import { ValidatorComponent } from "../../core/auth/register/components/validator/validator.component";
import { TextareaModule } from 'primeng/textarea';




@Component({
  selector: 'app-cart',
  imports: [CardModule, DatePipe, CurrencyPipe, TextareaModule ,ProgressSpinner, InputNumber, FormsModule, ButtonComponent, Toast, DialogModule, ReactiveFormsModule, ValidatorComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {

  private readonly cartService = inject(CartService);
  private readonly messageService = inject(MessageService);
  private readonly fb = inject(FormBuilder);
  private readonly orderService = inject(OrderService);


  
  cartItems : Signal<GetCartDetails[]> = computed(  () => this.cartService.cartItems()  );
  resturantIds: WritableSignal<number[]> = signal([]);
  


  isCallApi = signal(false);
  customerId = JSON.parse(localStorage.getItem('userId')!)
  updatedMessag !: string;
  dialogMessage !:string ;
  popUp: boolean = false;
  orderForm !: FormGroup;
  orderSub$ = new Subscription();
  isCallAPI : boolean = false ;  
  visible: boolean = false;

  // makeOrder = false ;


  

  ngOnInit(): void {
      this.getAllGesturantsId()
 this.initForm();
      console.log(this.cartItems().length);
  }




  getAllGesturantsId(): void {
     const makeOrder = JSON.parse(localStorage.getItem('makeOrder') !);

    if(makeOrder === false){
      this.isCallApi.set(true);
      this.cartService.getAllResturant().pipe(
        map(resturants => resturants.data.map(resturant => resturant.restaurantID))
        , mergeMap(resturantIds => from(resturantIds).pipe(
          mergeMap(resturantId => this.cartService.getCartItemsByCustomerIdForRestaurant(this.customerId, resturantId).pipe(
            map(cartItemsWithResturantId => cartItemsWithResturantId.data)
          )), toArray()
        ))
      ).subscribe({
        next: (resposne => {
          this.cartService.cartItems.set(resposne.flat()) ;
          // this.cartService.myRealCartItems.set( this.cartItems().length );
          console.log(this.cartItems());
        }),
        complete: (() => this.isCallApi.set(false))
      })
    }

    else {
      this.cartService.getCartItemsByCustomerIdForRestaurant(this.customerId , 1).subscribe({
        next:(response => {          
          console.log(response)})
      })
    }
  }



   initForm(): void {
    this.orderForm = this.fb.group({
      userId: [JSON.parse(localStorage.getItem('userId')!)],
      totalAmount: ['', [Validators.required, Validators.min(1)]],
      restaurantId: [3],
      deliveryAddress: ['', [Validators.required, Validators.minLength(5)]]
    })
  }



   addOrder(): void {
    if (this.orderForm.valid) {
      console.log(this.orderForm);
      if (this.orderSub$) this.orderSub$.unsubscribe();
      this.isCallAPI = true ;
      this.orderSub$ = this.orderService.addNweOrder(this.orderForm.value).pipe(finalize( () => this.isCallAPI = false) ).subscribe({
        next: (response => {
          if (response.message === 'Order Placed') {
            //  Show Popup . 
            this.orderForm.get('totalAmount')?.reset();
            this.orderForm.get('deliveryAddress')?.reset();
            this.visible = false ;
            this.dialogMessage =response.message;
            this.cartService.cartItems.set([]) ;

            localStorage.setItem('makeOrder',   JSON.stringify(true));
            // this.cartService.myRealCartItems.set(0);
            
            this.showDialogConfirm();
          }
        })
      })
    } else {
      this.orderForm.markAllAsTouched();
    }
  }




  
  showDialog( ) {
    this.visible = true;
  }



  updateCartQuantity(itemId: number, quantity: number): void {
    this.cartService.updateCartQuantity({ customerId: this.customerId, itemId: itemId, quantity: quantity }).subscribe({
      next: (response => {
        this.updatedMessag = response.message
        this.showConfirm();
        console.log(response)
        console.log(quantity);
      })
    })
  }


  showConfirm() {
    if (!this.popUp) {
      this.messageService.add({
        key: 'confirm', sticky: true,
        severity: 'success',
        summary: this.updatedMessag
      });
    }
  }

  onReject() {
    this.messageService.clear('confirm');
  }


  showDialogConfirm() {
     this.messageService.add({
        key: 'dialog', sticky: true,
        severity: 'success',
        summary: this.dialogMessage
      });
  }

 

 
}
