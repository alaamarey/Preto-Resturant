

export interface Register {
  message: string
  result: boolean
  data: Data
}

export interface Data {
  userId: number
  userName: string
  role: string
  password: string
  mobileNo: string
  emailId: string
  restaurantId: number
}