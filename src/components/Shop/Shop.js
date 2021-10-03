import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setcart] = useState([])
    // console.log(cart)
    const [displayProduct,  setdisplayProduct] = useState([])

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data =>{
          setdisplayProduct(data)
          setProducts(data)
        } );
    },[]);

    useEffect(()=>{
      const savedCart = getStoredCart();
      const storedCart = [];

      if (products.length){
        for (const key in savedCart){
          const addedproducts = products.find(product => product.key === key);
          if(addedproducts){
            const quantity = savedCart[key];
            addedproducts.quantity = quantity
            storedCart.push(addedproducts);
          }
        };
        setcart(storedCart);
      };
    },[products]);

    const handleToCart = (product)=> {
      const newCart = [...cart, product]
      setcart(newCart);
      addToDb(product.key)
    };

    const handelSearch = event =>{
      // console.log(event.target.value)
      const searchtextvalue = event.target.value;
      const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchtextvalue.toLowerCase()));
      setdisplayProduct(matchedProducts)
    }

    return (
      <>
      <div className="search-container">
        <input
        onChange={handelSearch}
        type="text" />
      </div>
       <div className="shop-container">
          <div className="product-container">
                {
                    displayProduct.map(product => <Product
                    key ={product.key}
                    product= {product}
                    handleToCart = {handleToCart}
                    ></Product>)
                }
          </div>

          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>
       </div>
      </>
    );
};

export default Shop;