
"use client"
import { FaLocationDot } from 'react-icons/fa';
import {BiSupport , BiLocationPlus} from 'react-icons/bi'
import ContactForm from '../component/contactForm';

const Contact= () =>{
    return(
       <main className='pt-20 text-end px-8'>
        <ContactForm/>
            <div className="border-b border-gray-300 pb-4">
            <h2 className="text-xl font-semibold">كيف تصل الينا</h2>
            <div className="flex items-center justify-end mt-2 w-full">
            <div>
                <p>:الفرع الرئيسي</p>
                <div className='flex'>
                <p>العنوان: الخبر - شارع عبدالرحمن بن معاذ</p>
                <div className="w-12 flex  justify-center">
            <BiLocationPlus className="w-12 flex text-gray-500" />
                </div>
                </div>
                <div className='flex'>
                <p>sales@dalitravelsa.com:الدعم الفني</p>
                <div className="w-12 flex  justify-center">
            <BiSupport className=" text-gray-500" />
                </div>
                </div>
            </div>
            </div>
        </div>
       </main>
    )
}
export default Contact;
