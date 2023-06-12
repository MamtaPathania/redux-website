import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar=()=> {
  const items = useSelector((state)=>state.cart);
  return (
    <div className='bg-gray-700'>
    <h2 className='text-white text-start text-2xl'>Redux Store</h2>
    <div className="flex justify-end uppercase text-center px-4 text-1xl gap-20 text-white ">
      <Link className='hover:text-red-400' to="/">Home</Link>
      <Link className='hover:text-red-400' to="/cart">Cart</Link>
      <span className='hover:text-red-400'>cart items:{items.length}</span>
        </div>
    </div>
  )
}

export default Navbar