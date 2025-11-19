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

 cartitemLength = computed(  () => this.cartService.cartItems() ) ;
 showMobileMenu = false;




  @HostListener('click' )
  onClick() {
    console.log(localStorage.getItem('toastMessage'));
  const toastData = localStorage.getItem('toastMessage');
    if (toastData) {
      const msg = JSON.parse(toastData);
      this.messageService.add({
        severity: msg.severity,
        summary: msg.summary,
        detail: msg.detail
      });
      localStorage.removeItem('toastMessage'); // امسح الرسالة بعد عرضها
    }
  }
}
