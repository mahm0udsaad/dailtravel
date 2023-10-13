
"use client"
import { FaLocationDot } from 'react-icons/fa';
import {BiSupport , BiLocationPlus} from 'react-icons/bi'
import ContactForm from '../component/contactForm';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer';
import GLocation from '../component/map';

const Contact= () =>{
    return(
       <main className='pt-20 mb-8 text-end w-11/12 lg:w-5/6 mx-auto px-8 relative'>
        <motion.div
       initial={{scale:0}}
       animate={{scale:1}}
       className="absolute top-0 right-0 z-5">
       <svg width="474" height="457" viewBox="0 0 474 457" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M474 228.5C474 354.697 367.891 457 237 457C380 21 0 354.697 0 228.5C0 102.303 106.109 0 237 0C367.891 0 474 102.303 474 228.5Z" fill="#27CEBA" fill-opacity="0.44"/>
        </svg>
       </motion.div>
        <ContactForm/>
            <div className="border-b border-gray-300 pb-4">
            <h2 className="text-xl font-semibold">كيف تصل الينا</h2>
            <div className="flex items-center justify-end mt-2 w-full">
            <div>
                <p>:الفرع الرئيسي</p>
                <div className='flex justify-between pt-3'>
                <p>العنوان: الخبر - شارع عبدالرحمن بن معاذ</p>
                <div className="w-12 flex justify-center items-center">
            <BiLocationPlus className="w-12 flex text-gray-500" />
                </div>
                </div>
                <div className='flex justify-between'>
                <p>sales@dalitravelsa.com:الدعم الفني</p>
                <div className="w-12 flex justify-center items-center">
            <BiSupport className=" text-gray-500" />
                </div>
                </div>
            </div>
            </div>
        </div>
        <div>
            <GLocation />
        </div>
       </main>
    )
}
export default Contact;
