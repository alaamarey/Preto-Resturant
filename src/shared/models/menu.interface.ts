export interface Menu {
  message: string
  result: boolean
  data: MenuDaum[]
}

export interface MenuDaum {
  restaurantID: number
  price: number
  menuItemName: string
  itemID: number
  description: string
  restaurantName: string
  availability: boolean
  photoUrl: string
  categoryName: string
}

