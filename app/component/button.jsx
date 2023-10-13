"use client"
import { Cart } from "@/context/context";
import { useContext } from "react";

const Btn = ({product}) =>{
    const {setCartItems , cartItems} = useContext(Cart)

    const addToCart = (id) => {
        setCartItems(cartItems.filter(item => item !== null))
        const itemExists = cartItems.some(item => item.id == id)
        if (itemExists) {
            return;
        }
      
        const productToAdd = cartItems.find(product => product.id == id);
      
        if (!productToAdd) {
          setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
        }
        console.log(cartItems);
      };

    return(
    <button onClick={addToCart} className="hover:text-blue-800 flex w-full justify-between p-3 main-bg text-white">  
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        <h1>Add to Card</h1>
      </button>
      )
}
export default Btn ;