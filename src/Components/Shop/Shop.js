import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([])
  
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      
    })
  },[])

  // useEffect(() => {
  //   let storedCart = getStoreCart();
  //   let saveCart = [];
  //   for(let id in storedCart){
  //      let addedProduct = products.find(product => product.id === id)
  //      if(addedProduct){
  //        let quantity = storedCart[id]
  //        addedProduct.quantity = quantity
  //         console.log(addedProduct)
  //         saveCart.push(addedProduct)
  //      }
  //   }
  //   setCart(saveCart);

  // }, [products])


  useEffect(() => {
    let storedCart = getStoreCart();
    let saveCart = [];
    for(let id in storedCart){
      let addedProduct = products.find(product => product.id === id)
      if(addedProduct){
        let quantity = storedCart[id]
        addedProduct.quantity = quantity 
        saveCart.push(addedProduct);
      }

    }
    setCart(saveCart)

  },[products])

  let handelAddToCart = (selectedProduct) => {
    console.log(selectedProduct)
    let exists = cart.find(product => product.id === selectedProduct.id)
    let newCart = [];
    if(!exists){
      selectedProduct.quantity = 1;
      newCart =[...cart, selectedProduct]
    }
    else{
      let rest = cart.filter(product => product.id !== selectedProduct.id)
      exists.quantity = exists.quantity +1;
      newCart = [...rest, exists];
    }


    // let newCart =[...cart, selectedProduct]
    setCart(newCart)
    addToDb(selectedProduct.id)
  }

  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product key={product.id} product={product} handelAddToCart={handelAddToCart}></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;