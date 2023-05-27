import React, { FC } from 'react'
import { Order } from '../../types'
import { useDispatch } from 'react-redux'
import { orderRemove, quantityAdd, quantityLess } from '../../store/orderSlice'

interface ItemOrderType {
  product: Order
}

const ItemOrder: FC<ItemOrderType> = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <div key={product.food_id} className='group '>
        <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 space-x-6'>
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

        <button
          className='text-base  pt-2 text-red-500'
          onClick={() => dispatch(orderRemove(product.food_id))}
        >
          Delete
        </button>
      </div>
      <div className='flex space-x-6 w-12 text-base mt-2 pl-24 '>
        <button onClick={() => dispatch(quantityLess(product.food_id))}>-</button>
        <input value={product.quantity} className='text-center w-12' />
        <button onClick={() => dispatch(quantityAdd(product.food_id))}>+</button>
      </div>
    </div>
  )
}

export default ItemOrder
