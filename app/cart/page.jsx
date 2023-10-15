"use client"
import { Cart } from '@/context/context';
import Link from 'next/link';
import React, { useContext ,useEffect ,useState} from 'react';
import {BiCartAdd} from 'react-icons/bi'

const CartDetail = () => {
  const { cartItems , setCartItems , total , setTotal} = useContext(Cart)

  useEffect(() => {
    setTotal(cartItems && cartItems.reduce((total, item) => total + item.price * item.quantity, 0));
  }, [cartItems]);
  
  const addOne = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id == id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };
  const removeOne = (id) => {
    setCartItems((prev) =>
    prev.map((item) => (item.id == id ? { ...item, quantity: item.quantity - 1 } : item))
  );
  setCartItems((prev)=> prev.map(item => item.quantity > 0 ? item : null).filter(Boolean))
  };
  
  return (
    <>
    {cartItems && cartItems.length > 0 ? (
      <div className="container mx-auto pt-20 text-end h-screen">
      <ul>
      {cartItems && cartItems.map((item) => (
      <li className='flex border border-gray-300 p-2 rounded-lg mb-2' key={!item.id ? item.id * 0.5 : item.id}>
        
      <div className="quantity-section flex items-center space-x-2">
        <button onClick={() => removeOne(item.id)} className="minus-btn bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 font-semibold">-</button>
        <span className="text-lg font-semibold">{item.quantity}</span>
        <button onClick={() => addOne(item.id)} className="plus-btn bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 font-semibold">+</button>
      </div>
      <div className="info-section flex-1 p-2">
        <p className="text-lg font-semibold">{item.name}</p>
        <span className="text-gray-500">SAR {item.price * item.quantity} </span>
      </div>
      <div className="wrapper h-[8rem]">
        <img src={item.image} className='w-full h-full rounded-lg'/> 
      </div>
      
    </li>
    ))}
      </ul>
      <div className="total">اجمالي : {total}ر.س</div>
    <div className="flex flex-end">
      <Link href={'/checkout'} className="p-4 main-bg text-white rounded">أتمام الطلب</Link>
    </div>
    </div>
    ):(
      <div className="h-screen flex justify-center items-center">
        <div
         className='pt-20 text-2xl font-semibold'>
        <BiCartAdd  className='text-center w-full text-6xl my-8'/>
          you need to add items 
          </div>
      </div>
    )}
    </>
  );
};

export default CartDetail;