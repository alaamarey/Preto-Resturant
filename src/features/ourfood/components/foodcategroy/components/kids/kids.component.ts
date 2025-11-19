import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ImgComponent } from "../sides/components/img/img.component";
import { Daum } from '../../models/foodcategroy.interface';
import { Foods } from '../../../../food';
import { AnimateOnScroll } from 'primeng/animateonscroll';


@Component({
  selector: 'app-kids',
  imports: [ImgComponent ,AnimateOnScroll],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css',
})
export class KidsComponent  implements OnInit {
   item  : WritableSignal<Daum> = signal ({} as Daum)


   private readonly foods = new Foods () ;

   ngOnInit(): void {
      this.foods.getFoodCategroy(37 , this.item) ;
   }
  }
