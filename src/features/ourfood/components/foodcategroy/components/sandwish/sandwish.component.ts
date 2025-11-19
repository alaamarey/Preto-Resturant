import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Daum, FoodItem } from '../../models/foodcategroy.interface';
import { Foods } from '../../../../food';
import { CategroyService } from '../../service/categroy.service';
import { FoodComponent } from "../../../../../../shared/components/food/food.component";

@Component({
  selector: 'app-sandwish',
  imports: [FoodComponent],
  templateUrl: './sandwish.component.html',
  styleUrl: './sandwish.component.css',
})
export class SandwishComponent implements OnInit {

  foodSandwishitems : WritableSignal<FoodItem[]> = signal([]);
  sandwishitem: WritableSignal<Daum> = signal({} as Daum) ;
  private readonly foods = new Foods();

 ngOnInit(): void {
   this.foods.getFoodItemByCategroy('18', this.foodSandwishitems);
   this.foods.getFoodCategroy(18, this.sandwishitem);
 }


}
