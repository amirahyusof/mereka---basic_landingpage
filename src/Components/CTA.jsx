import React from "react";
import actionImg from './Asset/action.jpg';

function Action(){
    return(
        <div className="text-black mb-8 grid md:grid-cols-2" id="action">
             <div className="w-[550px] md:w-[650px] mt-[90px] mx-auto text-center justify-center">
                <h1 className="md:text-6xl sm:text-5xl text-4xl text-[#7AA2E3] font-bold md:py-6">Transform your future with Akademy</h1>
                <p className="font-bold p-2 text-xl my-6">Empower yourself with the tools and knowledge you need to thrive in today's competitive job market.
                From public speaking mastery to effective time management, our comprehensive programs cover essential soft skills to help you stand out and succeed.
                </p>
                <h2 className="text-3xl text-[#31363F] mt-4 mb-8">Don't wait any longer - seize the opportunity to unlock your full potential with Akademy.</h2>
                <div className="grid grid-cols-3 gap-1.5">
                    <button className="bg-[#6AD4DD] w-[150px] rounded-md font-medium my-4 mx-auto py-2 text-white">Register Now</button>
                    <button className="bg-[#6AD4DD] w-[180px] rounded-md font-medium my-4 mx-auto py-2 text-white">Explore Programs</button>
                    <button className="bg-[#6AD4DD] w-[150px] rounded-md font-medium my-4 mx-auto py-2 text-white">Contact Us</button>
                </div>
            </div>
            <div className="mx-auto justify-center mt-[15%]">
                <img src={actionImg} className="w-[550px] md:w-[600px] rounded-xl" alt="" />
            </div>
        </div>
    )
}

export default Action;