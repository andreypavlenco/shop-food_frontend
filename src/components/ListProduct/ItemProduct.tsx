import React, { FC } from 'react'
import { Food } from '../../types'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store/store'
import { orderAdd } from '../../store/orderSlice'

interface ItemProps {
  product: Food
}

const ItemProduct: FC<ItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const order: Food[] = useSelector((state: RootState) => state.order.UserOrder)
  console.log(order)

  const handleProductAdd = (event: React.FormEvent<HTMLButtonElement>, product: Food) => {
    event.preventDefault()
    dispatch(orderAdd(product))
  }

  return (
    <div>
      <div key={product.food_id} className='group relative'>
        <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
          <img
            src={product.food_img}
            alt={product.food_img}
            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          />
        </div>
        <div className='mt-4 flex justify-between'>
          <div>
            <h3 className='text-base text-gray-700'>{product.food_name}</h3>
          </div>
          <p className='text-base font-medium text-gray-900'>{product.food_price}</p>
        </div>
      </div>
      <button
        type='button'
        className='rounded-md bg-red-300 px-2.5 py-1.5 text-sm  text-gray-900 shadow-sm ring-1 ring-inset '
        onClick={(event) => handleProductAdd(event, product)}
      >
        Order
      </button>
    </div>
  )
}

export default ItemProduct
