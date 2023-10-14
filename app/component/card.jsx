"use client"
import { Cart } from "@/context/context"
import Link from "next/link"
import { useContext } from "react"
import {PiShootingStarBold} from 'react-icons/pi'

const Card =({product , i})=>{
    const {setCartItems , cartItems} = useContext(Cart)
    const addToCart = (id) => {
        setCartItems(cartItems.filter(item => item !== null))
        const itemExists = cartItems.some(item => item.id == id)
        if (itemExists) {
        }
      
        const productToAdd = cartItems.find(product => product.id == id);
      
        if (!productToAdd) {
          setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
        }
        console.log(cartItems);
      };
    return(
        <div className="card border rounded hover:shadow-2xl cursor-pointer">
             <Link href={`programs/${i}`}>
             <div className="img-container w-full h-[20rem] relative">
             <h3 className="p-2 absolute top-0 w-full flex justify-center text-white font-semibold text-2xl bg-[#00000059]">{product.name.split(" ").length > 2 ? product.name.split(" ")[1] : product.name}</h3>
             {product.special && <span className="bg-blue-800 p-4 flex  absolute top-12 text-white">
              عرض خاص
              <PiShootingStarBold  className="text-yellow-300"/>
              </span> }
              <div className="bg-[#21244bd1] p-3 rounded-xl absolute bottom-0">
                <p className="text-[10px] text-white text-justify">
                  {product.firstDescription}
                </p>
              </div>
              <img className="w-full h-full rounded-t" src={product.image} alt={product.name} />
              </div>
             </Link>
             <div className="cardDscription text-end">
             <h3 className="p-2">{product.name}</h3>
            <span className="text-gray-500 text-sm p-2">{product.numbers}</span>
            <div className="action-section p-4 border-t-2 flex justify-between">
            <button onClick={addToCart} className="hover:text-green-500">  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              </button>
            <p className="text-blue-800">ر.س {product.price}</p>
             </div>
            </div>
              </div>
    )
}
const BlogCard =({product , i})=>{

  return(
      <div className="card border rounded hover:shadow-2xl cursor-pointer">
           <div className="img-container w-full h-[20rem] relative">
            <img className="w-full h-full rounded-t" src={product.image} alt={product.name} />
            </div>
           <div className="cardDscription text-end">
          <div className="action-section p-4 flex justify-between">
          <Link href={`blogs/${i}`} className="hover:bg-sky-300 border border-sky-300 p-4 transition ">  
            عرض
            </Link>
            <div>
            <h3 className="p-2">{product.title}</h3>
          <p className="text-blue-800">{product.date}</p>
            </div>
           </div>
          </div>
            </div>
  )
}
export  {Card , BlogCard} ;