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
  const createLink = () => {
    const config = {
      headers: {
        'api_key': KEY,
      },
    };
    axios.post(req_URL, formData , config)
      .then((res) => {
       setpayminLink(res.data.result.checkout_url)
      })
      .catch((err) => {
        console.error(err);
      });
  }

    return(
        <div className="pt-20 w-5/6 mx-auto">
    {profile ? (
        <>
        <div className="bg-green-300 p-4 rounded-lg shadow-md">
        <h1 className="text-2xl text-white text-center">Logged in</h1>
        <p className="text-lg">{total} الاجمالي {profile.name}! هلا</p>
        <button
            className="main-bg text-white p-4 mt-4 rounded-md"
            onClick={createLink}
        >
            انشاء رابط دقع
        </button>
        </div>
        {payminLink && 
          <div className="flex">
          <input
            value={payminLink}
            name="Link"
            className="w-full p-2 border border-gray-300 rounded-md"
            readOnly
          />
          <button
            className="main-bg text-white px-2 py-1 ml-2 rounded-md"
            onClick={handleCopyLink}
          >
            {isCopied ? 'Copied!' : <FaCopy />}
          </button>
        </div>}
        </>
    ) : (
        <OuthForm  />
    )}
</div>
    )
}
export default Checkout;