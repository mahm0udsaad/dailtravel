"use client"
import { Cart } from '@/context/context';
import Link from 'next/link';
import React, { useContext ,useEffect ,useState} from 'react';


const CartDetail = () => {
  const [uniqueItems, setuniqueItems] = useState([]);
  const { cartItems , setCartItems , total , setTotal} = useContext(Cart)
  const arrow = '\u2190';

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
    <div className="container mx-auto pt-20 text-end">
      <ul>
      {cartItems && cartItems.map((item) => (
      <li className='flex border border-gray-300 p-2 rounded-lg mb-2' key={!item.id ? item.id * 0.5 : item.id}>
      <div className="quantity-section flex items-center space-x-2">
        <button onClick={() => removeOne(item.id)} className="minus-btn bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 font-semibold">-</button>
        <span className="text-lg font-semibold">{item.quantity}</span>
        <button onClick={() => addOne(item.id)} className="plus-btn bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 font-semibold">+</button>
      </div>
      <div className="info-section flex-1 p-2">
        <p className="text-lg font-semibold">{item.title}</p>
        <span className="text-gray-500">${item.price * item.quantity}</span>
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
    </>
  );
};

export default CartDetail;