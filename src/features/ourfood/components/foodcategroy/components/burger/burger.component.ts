import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FoodComponent } from "../../../../../../shared/components/food/food.component";
import { Foods } from '../../../../food';
import { Daum, FoodItem } from '../../models/foodcategroy.interface';

@Component({
  selector: 'app-burger',
  imports: [FoodComponent],
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.css',
})
export class BurgerComponent implements OnInit {

  private readonly foods = new Foods();
  foodBurgerItems: WritableSignal<FoodItem[]> = signal([]);
  foodBurger: WritableSignal<Daum> = signal({} as Daum);



  ngOnInit(): void {
    this.foods.getFoodItemByCategroy('15', this.foodBurgerItems);
    this.foods.getFoodCategroy(15, this.foodBurger);
  }
 
}
