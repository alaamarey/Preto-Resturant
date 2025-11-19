import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FoodComponent } from "../../../../../../shared/components/food/food.component";
import { Foods } from '../../../../food';
import { Daum, FoodItem } from './../../models/foodcategroy.interface';

@Component({
  selector: 'app-pizza',
  imports: [ FoodComponent],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css',
})
export class PizzaComponent implements OnInit {

   private readonly foods = new Foods();
   foodPizzaItems: WritableSignal<FoodItem[]> = signal([]);
   pizzaItem: WritableSignal<Daum> = signal({} as Daum);



  ngOnInit(): void {
    this.foods.getFoodItemByCategroy('14', this.foodPizzaItems);
    this.foods.getFoodCategroy(14, this.pizzaItem);
  }






}
