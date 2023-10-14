import { FcGoogle } from 'react-icons/fc'
import { Cart } from '@/context/context';
import { useContext, useEffect, useState } from 'react';
import Google from './google';
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from 'jwt-decode';
const OuthForm = () => {

  const {profile , setProfile ,formData , setFormData} = useContext(Cart)
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        const updatedClient = { ...formData.client, [name]: value };
    
        setFormData({ 
          ...formData,
          client: updatedClient,
        });
      };
      
  const addProfile = () =>{
    setProfile(formData.client)
  }
  const getInfo = (res) => {
    const decoded = jwtDecode(res.credential);
    const { given_name, family_name, email, picture } = decoded;
    const newProfile = {
      name: given_name + family_name,
      email: email,
      picture: picture
    };
    setProfile(newProfile);
    console.log(profile);
  };

  const clientId ="762315185183-r8j58rnvi30ov9ghthc21qbr6q1ll0ke.apps.googleusercontent.com"

  return (
    <>
   <div className=" p-4 sm:w-5/6 w-11/12 mx-auto">
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
        {/* Add more form fields as needed */}
      </form>
      <div className="mt-4 flex flex-col w-52">
      <button onClick={addProfile} className="flex justify-center items-center bg-red-800 text-white py-2 px-4 rounded-md">
          Login
          <span className="ml-2">
            <FcGoogle className='text-3xl'/>
          </span>
        </button>
            <GoogleOAuthProvider clientId={clientId}>
                      <Google onSuccess={getInfo} />
                    </GoogleOAuthProvider>
      </div>
    </div>
    </>
  );
};

export default OuthForm;