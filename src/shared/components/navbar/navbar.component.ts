import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ToastModule } from 'primeng/toast'
import { MessageService } from 'primeng/api';
import { CartService } from '../../services/cart.service';
import { DrawerModule } from 'primeng/drawer';
import { ProfileService } from '../../../features/profile/service/profile.service';



@Component({
  selector: 'app-navbar',
  imports: [ToolbarModule, AvatarModule, SharedModule, ButtonModule, RouterLink, ToastModule, RouterLinkActive , DrawerModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers:[MessageService]
})
export class NavbarComponent {

  private messageService = inject(MessageService);
  private cartService = inject(CartService);
  private profileService = inject(ProfileService);

 cartitemLength = computed(  () => this.cartService.cartItems() ) ;
 showMobileMenu = false;
 visible3  = false ;
deatails = signal('');



ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.


  this.profileService.deleteuser().subscribe({
    next:(respose => {
        console.log(respose);
        
    } )
  }) 
  
}

  @HostListener('click' )
  onClick() {
    console.log(localStorage.getItem('toastMessage'));
  const toastData = localStorage.getItem('toastMessage');
    if (toastData) {
      const msg = JSON.parse(toastData);
      // this.messageService.add({
      //   severity: msg.severity,
      //   summary: msg.summary,
      //   detail: msg.detail
      // });

      this.deatails.set(msg.detail);
    
      this.visible3 = true ;


    
      localStorage.removeItem('toastMessage'); // امسح الرسالة بعد عرضها
    }
  }
}
