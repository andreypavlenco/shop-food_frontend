import React, { FC } from 'react'
import Menu from '../components/MenuShop/Menu'
import ListProducts from '../components/ListProduct/ListProduct'

const Shop: FC = () => {
  return (
    <div>
      <div className='flex space-x-24 w-max '>
        <div className='mt-16'>
          <Menu />
        </div>
        <ListProducts />
      </div>
    </div>
  )
}

export default Shop
