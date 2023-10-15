"use client"
import { Cart } from "@/context/context"
import Link from "next/link"
import { useContext, useRef } from "react"
import {PiShootingStarBold} from 'react-icons/pi'
import {motion , useInView} from 'framer'

const Card =({product , i})=>{
    const {setCartItems , cartItems} = useContext(Cart)
    const ref = useRef(null)
    const isInview = useInView(ref , {once:true})
    const addToCart = (id) => {
        setCartItems(cartItems.filter(item => item !== null))
        const itemExists = cartItems.some(item => item.id == id)
        if (itemExists) {
        }
      
        const productToAdd = cartItems.find(product => product.id == id);
      
        if (!productToAdd) {
          setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
        }
      };
        const bgColors = [
          "#000",
          "#667eea",
          "#47b6c7",
          "#ff003e",
          "#68d391",
          "#f9c74f",
          "#9f7aea",
          
        ];
      
    return(
        <div className="card border rounded hover:shadow-2xl cursor-pointer">
             <Link href={`programs/${i}`}>
             <div ref={ref} className="img-container w-full h-[20rem] relative overflow-hidden">
             <motion.h1
             initial={{x:-400}}
             animate={{x:isInview?0:-400}}
             transition={{duration:.4}}
             style={{backgroundColor:`${i < bgColors.length? bgColors[i] : '#ff0000a1'}`,borderRadius:' 0 0 3rem 0'}} className="p-3 absolute right-9 top-0 w-full flex justify-center text-white font-semibold text-xl" >{product.name}</motion.h1>
             {product.special && <span className="main-bg p-4 flex  absolute top-14 text-white">
              عرض خاص
              <PiShootingStarBold  className="text-yellow-300"/>
              </span> }
              <motion.div 
              initial={{x:400}}
              animate={{x:isInview?0:400}}
              transition={{duration:.4}}
              style={{backgroundColor:`${i < bgColors.length? bgColors[i] : '#ff0000a1'}`,borderRadius:'2.5rem 0rem 0 0', maxHeight: '4.6rem', overflow: 'hidden', textOverflow: 'ellipsis'}} className=" p-3 rounded-xl absolute bottom-0">
                <p className="text-[10px] text-white text-justify">
                  {product.firstDescription || product.description || product.included &&  product.included.map(e=> <li>{e}</li>)}
                </p>
              </motion.div>
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
              <p className="text-blue-800">
             {typeof product.price == 'number' ? <span> ر.س{' '}</span>: null}
              {product.price
                ? product.price
                : (product.price4Stars + " "+ 'ر.س')}
            </p>           
           
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
const VisaCard =({product , i})=>{

  return(
      <div className="card border rounded hover:shadow-2xl cursor-pointer">
           <div className="img-container w-full h-[20rem] relative">
            <img className="w-full h-full rounded-t" src={product.image} alt={product.name} />
            </div>
           <div className="cardDscription text-end">
          <div className="action-section p-4 flex justify-between">
          <Link href={`visa/${i}`} className="hover:bg-sky-300 border border-sky-300 p-4 transition ">  
             عرض التفاصيل
            </Link>
            <div>
            <h3 className="p-2">{product.visaType}</h3>
            </div>
           </div>
          </div>
            </div>
  )
}
const ServiceCard =({product , i})=>{

  return(
      <div className="card border rounded hover:shadow-2xl cursor-pointer">
           <div className="img-container w-full h-[20rem] relative">
            <img className="w-full h-full rounded-t" src={product.image} alt={product.name} />
            </div>
           <div className="cardDscription text-end">
          <div className="action-section p-4 flex justify-between">
          <Link href={`services/${i}`} className="hover:bg-sky-300 border border-sky-300 p-4 transition ">  
             عرض التفاصيل
            </Link>
            <div>
            <h3 className="p-2">{product.visaType}</h3>
            </div>
           </div>
          </div>
            </div>
  )
}
const Lable = ({title}) =>{
  return(
    <div className=" flex justify-between w-full pt-16">
        <div className="title text-end text-2xl w-5/6 border-b-2 h-6 border-gray"></div>
        <h1 className="title text-center text-blue-800 text-4xl sm:w-[20%]">{title}</h1>
      </div>
  )
}
export  {Card , BlogCard , Lable , VisaCard , ServiceCard} ;