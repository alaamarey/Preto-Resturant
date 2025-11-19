import { inject, signal, WritableSignal } from "@angular/core";
import { CategroyService } from "./components/foodcategroy/service/categroy.service";
import { Daum, FoodItem } from "./components/foodcategroy/models/foodcategroy.interface";


export class Foods {
    private readonly categroyService = inject(CategroyService);
    //  foodItems: WritableSignal<FoodItem[]> = signal([]);
    //  item: WritableSignal<Daum> = signal({} as Daum);
    
    
    
        getFoodItemByCategroy(categroyId :string , foodItems:WritableSignal<FoodItem[]>): void {
        this.categroyService.getFoodItemByCategroy(categroyId).subscribe({
          next: (response => {
           foodItems.set(response.data);
          })
        })
      }
    
    
    
       getFoodCategroy(categroyId:number , item : WritableSignal<Daum> ): void {
        this.categroyService.getAllFoodCategory().subscribe({
          next: (response) => {
            for (const itemData of response.data) {
              if (itemData.categoryId === categroyId) {
                item.set(itemData);            
              }
            }
          }
        })
      }
}