import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Foods } from '../../../../food';
import { Daum } from '../../models/foodcategroy.interface';
import { ImgComponent } from "./components/img/img.component";
import { AnimateOnScroll } from 'primeng/animateonscroll';


@Component({
  selector: 'app-sides',
  imports: [ImgComponent ,AnimateOnScroll],
  templateUrl: './sides.component.html',
  styleUrl: './sides.component.css',
})
export class SidesComponent  implements OnInit{


  private readonly foods = new Foods();
  northIndianItem : WritableSignal<Daum> = signal({} as Daum);


  ngOnInit(): void {
    this.foods.getFoodCategroy(31, this.northIndianItem);
  }


}
