"use client"
import { useInView ,motion} from 'framer';
import { useRef } from 'react';
import CountUp from 'react-countup';


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
  export default ProgressBar ;