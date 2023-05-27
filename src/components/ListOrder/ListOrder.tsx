import React, { FC } from 'react'
import ItemOrder from './ItemOrder'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const ListOrder: FC = () => {
  const products = useSelector((state: RootState) => state.order.UserOrder)
  return (
    <div>
      <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Shopping Cart</h2>

          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {products.map((product, id) => (
              <ItemOrder key={id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListOrder
