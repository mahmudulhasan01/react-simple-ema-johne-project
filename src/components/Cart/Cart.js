import React from 'react';

const Cart = (props) => {
    const {cart} = props
    let total = 0;

    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div>
        <h3>Order Summary</h3>
          <h5>Items ordered: {cart.length}</h5>
          <h6>Total Parice: {total}</h6>
        </div>
    );
};

export default Cart;