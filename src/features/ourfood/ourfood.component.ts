import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ButtonModule } from 'primeng/button';
import { SliderComponent } from "../../shared/components/slider/slider.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { RodiziomeatsComponent } from "./components/rodiziomeats/rodiziomeats.component";
import { FoodcategroyComponent } from "./components/foodcategroy/foodcategroy.component";

register();

@Component({
  selector: 'app-ourfood',
  imports: [ButtonModule, SliderComponent, ButtonComponent, RodiziomeatsComponent, FoodcategroyComponent ],
  templateUrl: './ourfood.component.html',
  styleUrl: './ourfood.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class OurfoodComponent {


  backgroundImages = signal([
 './assets/slider2.4.webp',
 './assets/slider-3.png',
 './assets/sldier2.1.webp',
 './assets/slider-4.png',
 './assets/slider2.2.webp',

  ])

}
