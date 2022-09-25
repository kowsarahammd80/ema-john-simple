import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([])
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  let handelAddToCart = (product) => {
    console.log(product)
    let newCart =[...cart, product]
    setCart(newCart)
  }

  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product key={product.id} product={product} handelAddToCart={handelAddToCart}></Product>)
        }
      </div>
      <div className="cart-container">
        <h4>This is Summary</h4>
        <p>Product add: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;