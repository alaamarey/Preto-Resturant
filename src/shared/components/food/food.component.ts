import { Component, input, InputSignal, signal, viewChild, WritableSignal } from '@angular/core';
import { Daum, FoodItem } from '../../../features/ourfood/components/foodcategroy/models/foodcategroy.interface';
import { CurrencyPipe } from '@angular/common';
import { RouterLink, UrlTree } from '@angular/router';
import { ImgDirective } from "../../directives/img.directive";

@Component({
  selector: 'app-food',
  imports: [CurrencyPipe, RouterLink, ImgDirective],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {

  oneFood: InputSignal<Daum> = input.required();
  foodItems: InputSignal<FoodItem[]> = input.required();
  sliceFrom :InputSignal<number> = input.required()
  sliceEnd :InputSignal<number |undefined> = input();
  routerLink :InputSignal<string | readonly any[] | UrlTree | null | undefined> = input() ;
}
