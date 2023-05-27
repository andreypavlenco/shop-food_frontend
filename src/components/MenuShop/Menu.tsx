import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { IQPizzaOn, KFCOn, PizzaDayOn } from '../../store/menuSlice'

const Menu: FC = () => {
  const dispatch = useDispatch()

  return (
    <div className='ml-10  border-2 w-96 rounded-s-md '>
      <div>
        <div></div>
        <ul className='space-y-6 flex flex-col text-lg pl-6 '>
          <li className=''>
            <button onClick={() => dispatch(PizzaDayOn())}>Pizza Day</button>
          </li>
          <li className=''>
            <button onClick={() => dispatch(IQPizzaOn())}> IQPizzaOn</button>
          </li>
          <li className=' '>
            <button onClick={() => dispatch(KFCOn())}>KFC</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
