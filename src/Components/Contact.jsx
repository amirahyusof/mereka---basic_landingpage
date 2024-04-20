import React from "react";

function Contact(){
    return(
        <div className="grid grid-cols-2 mt-[150px] gap-4 text-black mb-8" id="contact">
            <div className="w-[350px] md:w-[550px] mx-auto text-center justify-center">
                <p className="text-[#7AA2E3] font-bold p-2 text-xl">Contact Us</p>
                <h1 className=" md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 mb-8">Let's Stay Connected</h1>
                <p className="text-md text-[#31363F] mt-4 mb-8">Follow us on social media for updates and exclusive content</p>
            </div>

        
            <form className="grid">
                <div className="flex">
                    <input className="flex-1 mr-4" type="text" placeholder="Enter your name" />
                    <input className="flex-1 mr-4" type="text" placeholder="Enter your email" />
                </div>
                <textarea placeholder="How can we help you?" />
                <button className="bg-[#6AD4DD] w-[150px] rounded-md font-medium my-4 mx-auto py-2 text-white">Send</button>
            </form>

           
        </div>
    )
}

export default Contact;