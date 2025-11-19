

   // for all categoy //
export interface Foodcategroy {
  message: string
  result: boolean
  data: Daum[]
}

export interface Daum {
  categoryId: number
  categoryName: string
  photoUrl: string
  
}





  // for food item  categroy //
export interface FoodItemCategroy {
  message: string
  result: boolean
  data: FoodItem[]
 
}

export interface FoodItem {
   restaurantID: number
  price: number
  menuItemName: string
  itemID: number
  description: string
  restaurantName: string
  availability: boolean
  photoUrl: string

}


// for categroyService

export interface CategroiesRoot {
  message: string
  result: boolean
  data: CategroyData[]
}

export interface CategroyData {
  restaurantID: number
  price: number
  categoryName: string
  description: string
  restaurantName: string
  availability: boolean
  photoUrl: string
  openingHours: string
  categoryId: number
}



