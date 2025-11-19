
export interface Order {
  message: string
  result: boolean
  data : OrderData
}

export interface OrderData {
  userId: number
  totalAmount: number
  restaurantId: number
  deliveryAddress: string
}




export interface UserOrder {
  message: string
  result: boolean
  data : UserDataOrder [] 
}




export interface UserDataOrder {
  restaurantId: number
  orderDate: string
  orderId: number
  totalAmount: number
  userId: number
  restaurantName: string
}
