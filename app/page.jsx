"use client"
import Slider from "./component/slider"
import { Georgia } from "@/data/data"
import Card from "./component/card"
import { useInView ,motion} from 'framer';
import { useRef } from 'react';
import { FaPlus, FaStar } from 'react-icons/fa';
import CountUp from 'react-countup';
import {FcCustomerSupport , FcCollaboration , FcGoogle} from 'react-icons/fc'
import {GiWorld} from 'react-icons/gi'

const data = [
  {
    icon: <FcCustomerSupport />,
    number: 3000,
    title: "عملاء تمت خدمتهم",
  },
  {
    icon: <GiWorld />,
    number: 50,
    title: "عدد وجهاتنا حول العالم",
  },
  {
    icon: <FcGoogle />,
    number: '4.8',
    title: "تقييمنا على قوقل",
  },
  {
    icon: <FcCollaboration />,
    number: 10,
    title: "الخدمات السياحيه المقدمة من حجز طيران وفنادق وبرامج واستخراج تأشيرات",
  },
];
const ProgressBar = ({ title, number, icon })=> {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  const shadow = useRef(null);
  const shadowInview = useInView(shadow);
  return (
    <motion.div
    initial={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }}
    animate={{ boxShadow: shadowInview?'0px 5px 10px rgba(255, 0, 0, 0.2)':'0px 0px 0px rgba(0, 0, 0, 0)' }}
    transition={{duration:.5}}
    className="flex flex-col justify-around p-4 rounded-2xl my-5  border w-11/12 sm:hover:-translate-y-5 transition duration-300 cursor-pointer">
    <div className="flex flex-col items-center">
       <div
        style={{opacity:isInView? '1':'0'}}
        className='h-[5rem] text-4xl red transtion duration-300 text-[#e27d5f]'>
        {icon}
        </div>
        <p className="text-md text-center">
        {title}
        </p>
    </div>
    <div
    ref={ref}
    className="flex flex-col justify-start">
        <div className="w-full flex justify-center my-5 text-center text-gray-800">
         <p className='text-4xl'>+</p>
         {isInView?(
         <CountUp className='text-4xl font-bold' end={number} duration={2}/>
         ):null}
        </div>
        {/* <div className={`relative h-2 rounded  bg-[#ff00003d]`}>
            <div 
            ref={shadow}
            className="absolute top-0 left-0 w-2/3 h-2 bg-[#9c1c27] rounded">
            </div>
        </div> */}
    </div>
</motion.div>
  );
};
export default function Home() {
  return (
    <main className="flex min-h-screen w-[95%] lg:w-5/6 mx-auto flex-col items-center justify-between pt-20 px-4 sm:px-0">
      <Slider />
      <div className=" flex justify-end w-full pt-20">
        <div className="title text-end text-2xl w-4/5 border-b-2 h-4 border-gray"></div>
        <h1 className="title text-end text-2xl sm:pl-4">الوجهات السياحيه</h1>
      </div>
      <div className="shop grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 h-screen">
          <div className="container pt-8">
            <Card product={Georgia}/>
          </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:w-11/12 mx-auto border-t-[1px] border-gray p-4">
                {data.map((data, index) => (
                  <ProgressBar
                    key={index}
                    title={data.title}
                    number={data.number}
                    icon={data.icon}
                  />
                ))}
              </div>
    </main>
  )
}
