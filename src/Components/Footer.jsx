import React from "react";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaLinkedin } from "react-icons/fa";



function Footer(){
    return(
        <div className="w-full grid justify-center items-center px-16 text-white bg-[#365486]">
             <p className="text-md mt-8 mb-4">Follow us on social media for updates and exclusive content</p>
             <div className="grid grid-cols-4 gap-2 mx-auto justify-center">
             <FaFacebook size={35} color="white" />
             <FaInstagram size={35} color="white" />
             <FaTwitterSquare size={35} color="white" />
             <FaLinkedin size={35} color="white" />
             </div>
             <p className="text-sm text-white mt-8 mb-4 mx-auto justify-center">&copy; 2024 Akademy. All rights reserved.</p>
        </div>
    )
}

export default Footer;