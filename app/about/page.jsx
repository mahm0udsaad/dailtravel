"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ProgressBar from '../component/countCard';
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
const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref , {once:true})
  return (
    <div className="container mx-auto pt-20">
        <div className="w-full h-[50vh] sm:h-[85vh] relative">
            <motion.div
            initial={{ x:500 }}
            animate={{ x:0 }}
            className="absolute sm:bottom-36 bottom-24 right-8  sm:right-32">
              <h1 className="sm:text-6xl text-4xl font-semibold primary-color">وجهتك السياحيه</h1>
              <span className='sm:text-2xl text-xl font-semibold text-[#5ce1e6]'>لاي مكان في العالم</span>
            </motion.div>
            <img className='h-full w-full' src="/about.jpg" alt="" />
        </div>
       <section className='relative h-[70vh] flex flex-col items-center justify-center my-8 px-8'>
       <motion.div
       initial={{scale:0}}
       animate={{scale:isInView ? 1:0}}
       className="absolute top-0 right-0 z-5">
       <svg width="474" height="457" viewBox="0 0 474 457" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M474 228.5C474 354.697 367.891 457 237 457C380 21 0 354.697 0 228.5C0 102.303 106.109 0 237 0C367.891 0 474 102.303 474 228.5Z" fill="#27CEBA" fill-opacity="0.44"/>
        </svg>
       </motion.div>
        <motion.div
         initial={{opacity:0}}
         animate={{opacity:isInView ? 1:0}}
         transition={{duration:.5}}
        ref={ref} className='z-10 text-end '>
        <h1 className="text-3xl font-bold mb-4 text-[#148b9d]">من نحن</h1>
      <p className="text-xl mb-4">
        المعنى الحقيقي للريادة والإبداع في مجال السفر والسياحة فليست جودة برامجنا هي الميزة الوحيدة لنا فنحن نتميز بالابتكار والتنوع والشمولية في مجال السفر والسياحة.
      </p>
      <p className="text-xl mb-4">
        لدينا أفضل الأدوات التي تساعدنا على تقديم أفضل الخدمات لعملائنا ونوفر لهم باقة واسعة من خيارات البرامج السياحية لوجهات عديدة ومتميزة في كافة أنحاء العالم.
      </p>
      <p className="text-xl mb-4">
        ونقدم لهم جميع خدمات السفر والسياحة المتكاملة من تذاكر الطيران والمجموعات السياحية المنظمة والفنادق والسياحة التعليمية والسياحة العلاجية والكروز والسياحة الداخلية واستخراج التأشيرات ومن خلال شبكة علاقاتنا ووكلائنا الموجودين في أنحاء العالم فإن سفرك سيكون أسهل.
      </p>
        </motion.div>
       </section>
       <section>
       <div className="my-6 grid grid-cols-2 sm:grid-cols-4 lg:w-11/12 mx-auto  border-gray">
                {data.map((data, index) => (
                  <ProgressBar
                    key={index}
                    title={data.title}
                    number={data.number}
                    icon={data.icon}
                  />
                ))}
              </div>
       </section>
       <section>
        <div className="flex sm:flex-row flex-col justify-between w-full sm:h-60 px-8">
            <div className="sm:flex sm:mx-0 mx-auto w-[40%] justify-center">
            <img className='w-48' src="/social.png" alt="" />
            </div>
            <div className="sm:w-[60%] px-8">
            <p className="text-end text-3xl main-color">
            كن على اتصال معنا
            <br />
            تابعنا على قنوات التواصل الإجتماعي ..
            </p>
            <div className="mb-9 flex justify-center sm:justify-end pt-8 ">
            <a href="#!" className="mr-9 bg-blue-500 p-4 text-white">
                <FaFacebook className="h-4 w-4" />
            </a>
            <a href="#!" className="mr-9 main-bg p-4 text-white">
                <FaTwitter className="h-4 w-4" />
            </a>
            <a href="#!" className="mr-9 bg-purple-500 p-4 text-white">
                <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#!" className="mr-9 bg-blue-500 p-4 text-white">
                <FaLinkedin className="h-4 w-4" />
            </a>
            </div>
            </div>
        </div>
       </section>
     
    </div>
  );
};

export default About;
