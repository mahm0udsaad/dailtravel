"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';



const Footer = () =>{
    return (
            <>
             
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