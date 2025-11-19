import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ImgComponent } from "../sides/components/img/img.component";
import { Foods } from '../../../../food';
import { Daum } from '../../models/foodcategroy.interface';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-desert',
  imports: [ImgComponent ,AnimateOnScroll],
  templateUrl: './desert.component.html',
  styleUrl: './desert.component.css',
})
export class DesertComponent   implements OnInit{


  private readonly foods = new Foods() ;
 cakeItem  :  WritableSignal<Daum> = signal({} as Daum)


  ngOnInit(): void {
    this.foods.getFoodCategroy(30 , this.cakeItem) ;
  }
}
