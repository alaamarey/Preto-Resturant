export interface Profile {
}



export interface Profile {
  message: string
  result: boolean
  data: ProfileData
}

export interface ProfileData {
  userId: number
  userName: string
  role: string
  password: string
  mobileNo: string
  emailId: string
  restaurantId: number
}
