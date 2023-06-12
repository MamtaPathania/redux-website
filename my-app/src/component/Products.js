import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {add} from '../Store/cartSlice'

function Products() {
const dispatch = useDispatch();
  const [products,setProducts]=useState([]);
   

  useEffect(()=>{
    const fetchProducts= async()=>{
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json()
    
      setProducts(data)
      
    }

  fetchProducts();
  },[])

  const handleAdd =(product)=>{
dispatch(add(product))
  }
  return(
    <>
  <h1 className='p-2 m-4 hover:text-red-600 text-black text-2xl'>PRODUCTS</h1>
    <div className='grid grid-cols-2 md:grid-cols-4 ld:grid-cols-6 m-4 p-4 gap-8'>
      {
        products.map((product)=>{ 
          return(
            <div className='border border-gray-700 rounded-lg p-2 '>
              <img src={product.image} alt="product" className='img'/>
              <h4 className='font-bold my-2'>{product.title}</h4>
              <span>{product.rating.rate}</span>
              <h5>{product.price}</h5>
              <button onClick={()=>handleAdd(product)}className='bg-black text-white rounded-lg p-2'>Add to Cart</button>
            </div>
          )
        })
      }

    </div>
    </>

  )
}

export default Products