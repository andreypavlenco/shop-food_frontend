import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useQuery } from 'react-query'
import { productApi } from '../../service/productApi'
import ItemProduct from './ItemProduct'
import { Food } from '../../types'

const ListProducts: FC = () => {
  const KFC = useSelector((state: RootState) => state.menu.KFC)
  const PizzaDay = useSelector((state: RootState) => state.menu.PizzaDay)
  const IQPizza = useSelector((state: RootState) => state.menu.IQPizza)

  const { data: pizzaDay } = useQuery('PizzaDay', () => {
    return productApi.getPizzaDay()
  })

  const { data: Kfc } = useQuery('KFC', () => {
    return productApi.getKFC()
  })

  const { data: IQ } = useQuery('IQpizza ', () => {
    return productApi.getIQpizza()
  })

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Menu</h2>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {PizzaDay ? (
            pizzaDay?.data.map((product: Food, id: number) => (
              <ItemProduct key={id} product={product} />
            ))
          ) : (
            <></>
          )}

          {IQPizza ? (
            IQ?.data.map((product: Food, id: number) => <ItemProduct key={id} product={product} />)
          ) : (
            <></>
          )}

          {KFC ? (
            Kfc?.data.map((product: Food, id: number) => <ItemProduct key={id} product={product} />)
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListProducts
