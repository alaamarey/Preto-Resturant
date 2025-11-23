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
  imports: [ToolbarModule, AvatarModule, SharedModule, ButtonModule, RouterLink, ToastModule, RouterLinkActive, DrawerModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [MessageService]
})
export class NavbarComponent {

  private messageService = inject(MessageService);
  private cartService = inject(CartService);
  // private profileService = inject(ProfileService);

  deatails = signal('');
  visible3 = false;

  cartitemLength = computed(() => this.cartService.cartItems());
  showMobileMenu = false;
  toastData = localStorage.getItem('toastMessage');




  @HostListener('click', ['$event'])
  onClick(event: Event) {

    const target = event.target as HTMLButtonElement;


    if (target.closest('.ignore-click')) {
      if (!JSON.parse(localStorage.getItem('userId')!)) {
        localStorage.setItem('toastMessage', JSON.stringify({
          severity: 'warn',
          summary: 'Warn',
          detail: 'You must login to access this page! Look at The Bottom of the page to SignUp'
        }));
        const toastData = localStorage.getItem('toastMessage')!;
        const msg = JSON.parse(toastData);
        this.deatails.set(msg.detail);
      }else{
        this.deatails.set('');
      }
      console.log(target);
      return;
    }





    console.log(localStorage.getItem('toastMessage'));
    const toastData = localStorage.getItem('toastMessage');
    if (toastData) {
      const msg = JSON.parse(toastData);
      this.messageService.add({
        severity: msg.severity,
        summary: msg.summary,
        detail: msg.detail
      });


      this.deatails.set(msg.detail);
      this.visible3 = true;
      console.log(this.deatails());
      localStorage.removeItem('toastMessage'); // امسح الرسالة بعد عرضها
      console.log('kakakakkak');
    }
  }








  isToast() {
    if (this.deatails()) {
      this.visible3 = true;
    }else{
      this.visible3 = false;
    }
      this.showMobileMenu = false;
      localStorage.removeItem('toastMessage')
    }
}





