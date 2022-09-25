import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
  
  let {name, img, seller, price, ratings} = props.product;
  // console.log(props);
  // let {handelAddToCart} = props;
  return (
    <div className='product'>
       <img src={img} alt="" />
       <div className='product-info'>
       <p className='product-name'>{name}</p>
       <p>Price: ${price}</p>
       <p><small>Seller: {seller}</small></p>
       <p>Ratings: {ratings} stars</p>
       </div>
      <button onClick={() => props.handelAddToCart(props.product)} className='btn-cart'><p>Add To Cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>   </button>
     
    </div>
  );
};

export default Product;