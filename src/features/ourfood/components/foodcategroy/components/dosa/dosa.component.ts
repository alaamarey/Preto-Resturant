import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Foods } from '../../../../food';
import { Daum, FoodItem } from '../../models/foodcategroy.interface';
import { FoodComponent } from "../../../../../../shared/components/food/food.component";

@Component({
  selector: 'app-dosa',
  imports: [FoodComponent],
  templateUrl: './dosa.component.html',
  styleUrl: './dosa.component.css',
})
export class DosaComponent implements OnInit {

  private readonly foods = new Foods();
  
  foodDosaItems : WritableSignal<FoodItem[]> = signal([]);
  dosaItem  : WritableSignal<Daum> = signal({} as Daum)


  ngOnInit(): void {
    this.foods.getFoodItemByCategroy('26', this.foodDosaItems);
    this.foods.getFoodCategroy(26, this.dosaItem);
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log(this.foodDosaItems());
    
  }

}
