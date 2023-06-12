import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {remove} from '../Store/cartSlice'

const Cart=()=> {

  const dispatch = useDispatch();

  const products = useSelector(state=>state.cart);

  const handleRemove=(productid)=>{
 dispatch(remove(productid));
  }
  return (
    <div>
      <h3 className='m-4 text-3xl hover:text-red-500'>Cart</h3>
      <div >
        {
          products.map((product)=>{
            return(
              <div className='border border-gray-300 p-2 m-4'>
                <img src={product.image} alt="" className='img'/>
                <h5>{product.title}</h5>
                <h3>{product.price}</h3>
                <button className='bg-black text-white rounded-lg p-2' onClick={()=>handleRemove(product.id)}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart