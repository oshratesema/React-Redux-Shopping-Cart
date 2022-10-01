import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { setProducts } from '../../redux/actions/productActions'
import ProductComponent from '../ProductsPage/ProductComponent'

export default function ProductListening() {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
        console.log("Error" , err );
      })
     dispatch(setProducts(response.data));
  }

  useEffect(() => {
    fetchProducts()
  },[])

  console.log('products:' ,products);
  return (
    <div className='ui grid container'>
        <h1>ProductListening</h1>
        <ProductComponent/>     
    </div>
  )
}
