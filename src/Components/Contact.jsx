import React from "react";
import Swal from "sweetalert2";

function Contact(){
    
    const handleContact= () => {
        Swal.fire({
            title: "Message send!",
            text: "Thank you contact us!",
            icon: "success"
          });

    }

    return(
        <div className="grid grid-cols-2 mt-[150px] gap-4 text-black mb-8" id="contact">
            <div className="w-[350px] md:w-[550px] mt-8 mx-auto text-center justify-center">
                <p className="text-[#7AA2E3] font-bold p-2 text-xl">Contact Us</p>
                <h1 className=" md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 mb-8">Let's Stay Connected</h1>
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
                    className="bg-[#6AD4DD] w-full mt-4 px-4 rounded-md font-medium my-4 mx-auto py-2 text-white">
                    Send
                </button>
            </form>

           
        </div>
    )
}

export default Contact;