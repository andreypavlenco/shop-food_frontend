export interface Store {
  store_id: number
  store_name: string
  store_address: string
}

export interface Food {
  food_id: number
  food_name: string
  food_price: number
  food_img: string
}

export interface Delivery {
  delivery_id: number
  store_id: number
  food_id: number
  delivery_time: Date
}

export interface Order {
  quantity: number
  food_id: number
  food_name: string
  food_price: number
  food_img: string
}
