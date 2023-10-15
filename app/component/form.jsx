"use client"
import { FcGoogle } from 'react-icons/fc'
import {MdOutlineDangerous} from 'react-icons/md'
import { Cart } from '@/context/context';
import { useContext, useState } from 'react';
import jwtDecode from 'jwt-decode';
const OuthForm = () => {

  const {profile , setProfile ,formData , setFormData} = useContext(Cart)
  const [error , setError] = useState(false)
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        const updatedClient = { ...formData.client, [name]: value };
    
        setFormData({ 
          ...formData,
          client: updatedClient,
        });
      };
      
   const addProfile = () => {
    if (!formData.client || !formData.client.name || !formData.client.email || !formData.client.phone) {
      setError(true)
      return;
    }

    setProfile(formData.client);
  };

  return (
    <>
   <div className=" p-4 sm:w-5/6 w-11/12 mx-auto">
  {error &&  <div className="flex justify-center items-center bg-red-500 text-white text-center py-2 px-4 rounded-md my-4">
    Please fill all the inputs
    <MdOutlineDangerous className='text-3xl mx-4' />
    </div>}
      <h1 className="text-2xl text-gray-700">Login</h1>
      <form className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.client?.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.client?.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.client?.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
      </form>
      <div className="mt-4 flex flex-col w-52">
      <button onClick={addProfile} className="flex justify-center items-center bg-red-800 text-white py-2 px-4 rounded-md">
          sign up
        </button>
      </div>
    </div>
    </>
  );
};

export default OuthForm;