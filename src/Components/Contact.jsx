import React from "react";
import Swal from "sweetalert2";
import { IoMdRocket } from "react-icons/io";

function Contact(){
    
    const handleContact= () => {
        Swal.fire({
            title: "Message send!",
            text: "Thank you contact us!",
            icon: "success"
          });

    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return(
        <div className=" mt-[150px] gap-4 text-black mb-8" id="contact">
            <div className="grid sm:grid-cols-2">
            <div className="w-[350px] md:w-[550px] mt-8 mx-auto text-center justify-center">
                <p className="text-[#7FC7D9] font-bold p-2 text-xl">Contact Us</p>
                <h1 className="text-white md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 mb-8">Let's Stay Connected</h1>
            </div>

        
            <form className="block mt-4 mx-auto">
                <div className="mb-2">
                    <input className="w-full md:w-[500px] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400" type="text" placeholder="Enter your name" required />
                </div>
                <div className="mb-2">
                    <input className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400" type="email" placeholder="Enter your email" required />
                </div>
                <textarea className="w-full mt-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400" placeholder="How can we help you?" required />
                <button 
                    onClick={handleContact}
                    className="bg-[#DCF2F1] w-full mt-4 px-4 rounded-md font-medium my-4 mx-auto py-2 text-[#0F1035]">
                    Send
                </button>
            </form>
            </div>
           
           <div className="flex justify-center items-center text-white my-4">
                <p onClick={scrollToTop} style={{cursor: "pointer"}} className="flex items-center">
                Go to top<IoMdRocket size={30} color="white" /></p>
           </div> 
        </div>
    )
}

export default Contact;