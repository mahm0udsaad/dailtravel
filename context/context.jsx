"use client"

import  { createContext, useEffect, useState } from 'react';
export const Cart =createContext();

const CartProvider = (props) => {
  const [total,setTotal]= useState(0)
  const [numOfItems, setNumOfItems] = useState(0);

  const [cartItems, setCartItems] = useState(() => {
    if (typeof window == 'undefined') {
      return null;
    }
    const cart = localStorage.getItem('cart');
    return cart && cart !== 'undefined' ? JSON.parse(cart) : [];
  });
  const [formData, setFormData] = useState({
    amount: total,
    currency: "SAR",
    order_id: "123456",
    client: {
        name: "",
        phone: "",
        email: ""
    },
    language: "ar",
    });
  const [profile , setProfile] = useState(()=>{
  if(typeof window == 'undefined'){
    return null;
  }
  const profile = localStorage.getItem('profile');
  return profile && profile ? JSON.parse(profile) : null
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));

    const totalQuantity =  cartItems.reduce((total, item) =>item? total + item.quantity : item, 0);
    setNumOfItems(totalQuantity);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);
  return (
    <Cart.Provider value={{ cartItems , setCartItems, numOfItems , setTotal , total  , formData , setFormData, profile , setProfile }}>
      {props.children}
    </Cart.Provider>
  );
};

export default CartProvider;