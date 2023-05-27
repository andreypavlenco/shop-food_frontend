import React, { FC } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Shop from '../../pages/Shop'
import ShopCard from '../../pages/ShopCard'

const Navbar: FC = () => {
  return (
    <div>
      <nav className='w-max ml-20 mt-5 text-xl'>
        <div className='flex justify-centre'>
          <div className=''>
            <ul className='flex flex-nowrap space-x-8'>
              <li>
                <Link to='/'>Shop</Link>
              </li>
              <li>
                <Link to='/shop-card'>Shopping Card</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop-card' element={<ShopCard />}></Route>
      </Routes>
    </div>
  )
}

export default Navbar
