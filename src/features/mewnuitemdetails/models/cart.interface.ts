


export interface Cart {
    message: string
    result: boolean
    data: CartDetails
  }
  
  export interface CartDetails {
    customerId: number
    itemId: number
    quantity: number
  }
  




  export interface GetCart {
    message: string
    result: boolean
    data: GetCartDetails[]
  }

  
  export interface GetCartDetails {
    price: number
    menuItemName: string
    itemID: number
    description: string
    photoUrl: string
    addedDate: string
    cartId: number
    quantity: number
  }
  






  export interface Resturant {
  message: string
  result: boolean
  data: ResturantData[]
}

export interface ResturantData {
  restaurantID: number
  name: string
  cuisineType: string
  address: string
  contactNo: string
  openingHours: string
}
