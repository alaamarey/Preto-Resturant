import { Component, HostListener, inject, Renderer2, signal, viewChild } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DeliveriesComponent } from './components/deliveries/deliveries.component';
import { RegisterComponent } from "../../core/auth/register/register.component";
import { SliderComponent } from "../../shared/components/slider/slider.component";
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ToastModule} from 'primeng/toast'
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-zomato',
  imports: [WelcomeComponent, DeliveriesComponent, RegisterComponent, SliderComponent, ButtonModule, ButtonComponent ,ToastModule],
  templateUrl: './zomato.component.html',
  styleUrl: './zomato.component.css',
})
export class ZomatoComponent {


  backgroundImages = signal([ 
    '/assets/slider-1.jpg',
    '/assets/slider-2.png',
    '/assets/slider-3.png',
    '/assets/slider-4.png',
    '/assets/slider-5.png',
  ])


 





}
  




