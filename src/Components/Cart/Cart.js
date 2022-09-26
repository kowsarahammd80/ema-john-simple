import React from 'react';
import './Cart.css'

const Cart = (props) => {
  let {cart} = props;
  console.log(cart);
  console.log(cart)

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for(let product of cart){
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
     shipping = shipping + product.shipping;
  }
  
  let tex = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = total + shipping + tex

   
  return (
    <div className='cart'>
       <h4>This is Summary</h4>
        <p>Product add: {quantity}</p>
        <p>Total Price: $ {total}</p>
        <p>Total Shipping: $ {shipping}</p>
        <p>Tex: $ {tex} </p>
        <h5>Grand Total: $ {grandTotal.toFixed(2)} </h5>
    </div>
  );
};

export default Cart;