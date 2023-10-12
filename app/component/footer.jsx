"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
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
const Footer = () =>{
    return (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 w-11/12 mx-auto border-t-[1px] border-gray p-4">
                {data.map((data, index) => (
                  <ProgressBar
                    key={index}
                    title={data.title}
                    number={data.number}
                    icon={data.icon}
                  />
                ))}
              </div>
              <footer className="flex flex-col items-center  text-center text-white">
                <div className="container pt-9">
                  <div className="mb-9 flex justify-center">
                    <a href="#!" className="mr-9">
                      <FaFacebook className="h-4 w-4 text-white" />
                    </a>
                    <a href="#!" className="mr-9">
                      <FaTwitter className="h-4 w-4 text-white" />
                    </a>
                    <a href="#!" className="mr-9">
                      <FaInstagram className="h-5 w-5 text-white" />
                    </a>
                    <a href="#!" className="mr-9">
                      <FaLinkedin className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
        
                <div className="w-full p-4 text-center">
                  © 2023 Copyright:
                  <a
                    className="text-white"
                    href="https://tailwind-elements.com/"
                  >
                    Tailwind Elements
                  </a>
                </div>
              </footer>
            </>
    )
}
export default Footer ;