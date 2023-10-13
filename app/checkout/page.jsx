"use client"
import { Cart } from "@/context/context"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { FaCopy } from 'react-icons/fa'; // Import the React copy ico
import OuthForm from "../component/form"

const Checkout = () =>{
const KEY = 'E4B73FEE-F492-4607-A38D-852B0EBC91C9'
const req_URL = `https://api.fatora.io/v1/payments/checkout?api_key=${KEY}`
const {cartItems ,formData , setFormData , profile } = useContext(Cart)
const [payminLink , setpayminLink] = useState(null)
const [isCopied, setIsCopied] = useState(false);

const handleCopyLink = () => {
  navigator.clipboard.writeText(payminLink).then(() => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 20000); // Reset the copied state after 2 seconds
  });
};
const [total,setTotal]= useState(0)

  useEffect(() => {
    setTotal(cartItems && cartItems.reduce((total, item) => total + item.price * item.quantity, 0));
    setFormData({ 
      ...formData,
      client: profile,
    });
  }, []);
  useEffect(()=>{
    createLink()

  },[formData])
  const createLink = () => {
    const config = {
      headers: {
        'api_key': KEY,
      },
    };
    axios.post(req_URL, formData , config)
      .then((res) => {
       setpayminLink(res.data.result.checkout_url)
       console.error(payminLink);

      })
      .catch((err) => {
        console.error(err);
      });
  }

    return(
        <div className="pt-20 w-5/6 mx-auto h-screen">
    {profile ? (
        <>
        <div className="bg-green-300 p-4 rounded-lg shadow-md my-8">
        <h1 className="text-2xl text-white text-center">Logged in</h1>
          <p className="text-lg text-end">{total} الاجمالي {profile.name}! هلا</p>
          </div>
        <ul>
        <h1 className="text-end px-4 text-2xl font-semibold">: التفاصيل</h1>
        {cartItems && cartItems.map((item) => (
          <li className='flex p-2 rounded-lg mb-2 text-end' key={!item.id ? item.id * 0.5 : item.id}>
          <div className="info-section flex-1 p-2">
            <p className="text-lg ">{item.name}</p>
            <span className="text-gray-500">SAR {item.price * item.quantity} </span>
          </div>
          
        </li>
        ))}
        </ul>
        <a
            target="_blank"
            href={payminLink}
            className="main-bg text-white p-4 mt-4 rounded-md "
        >
          اتمام الدفع
        </a>
        </>
    ) : (
        <OuthForm  />
    )}
</div>
    )
}
export default Checkout;