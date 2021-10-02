import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = (props) => {
    // console.log(props.product)
    // console.log(props)
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    const {name, img, seller, price, stock} = props.product
    return (
        <div className="product">
            <img src={img} alt="" />

            <div className="product-details">
            <h4 className="product-name">{name}</h4>
            <p><small>by:  {seller}</small></p>
            <p><b>${price}</b></p>
            <p><small>only {stock} left in stock - order soon</small></p>
            <button
                onClick={()=>props.handleToCart(props.product)}
            className="btn-reguler">{element}  add to cart</button>
            </div>
        </div>
    );
};

export default Product;