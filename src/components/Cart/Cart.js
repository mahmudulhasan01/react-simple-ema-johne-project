import React from 'react';

const Cart = (props) => {
    const {cart} = props
    // console.log(cart)

    let total = 0;
    let totalQuantity = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        };
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    };
    
    return (
        <div>
        <h3>Order Summary</h3>
          <h5>Items ordered: {totalQuantity}</h5>
          <h6>Total Parice: {total}</h6>
        </div>
    );
};

export default Cart;