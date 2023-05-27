import React, { FC } from 'react'
import Form from '../components/Form/Form'
import ListOrder from '../components/ListOrder/ListOrder'

const ShopCard: FC = () => {
  return (
    <div className='flex'>
      <Form />
      <ListOrder />
    </div>
  )
}

export default ShopCard
