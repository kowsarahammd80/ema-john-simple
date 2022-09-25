import React from 'react';

const Cart = ({cart}) => {
  return (
    <div>
       <h4>This is Summary</h4>
        <p>Product add: {cart.length}</p>
    </div>
  );
};

export default Cart;