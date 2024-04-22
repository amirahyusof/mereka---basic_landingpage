import React from "react";
import actionImg from './Asset/action.jpg';


function Action(){
    return(
        <div className="text-white grid md:grid-cols-2 mb-8" id="action">
             <div className="w-[300px] sm:w-[550px] md:w-[650px] mt-[90px] mx-auto text-center justify-center">
                <h1 className="md:text-6xl sm:text-5xl text-4xl text-[#7FC7D9] font-bold md:py-6">Transform your future with <span className="text-white"> Aka</span><span className="text-[#0F1035]">demy</span></h1>
                <p className="font-bold p-2 text-xl my-6">Empower yourself with the tools and knowledge you need to thrive in today's competitive job market.
                From public speaking mastery to effective time management, our comprehensive programs cover essential soft skills to help you stand out and succeed.
                </p>
                <h2 className="text-3xl text-[#DCF2F1] mt-4 mb-8">Don't wait any longer - seize the opportunity to unlock your full potential with Akademy.</h2>
                <div className="grid sm:grid-cols-2 gap-1.5 px-12">
                    <button className="bg-[#7FC7D9] w-[150px] rounded-md font-medium my-4 mx-auto py-2 text-white">
                      <a href="#plans">Register Now</a>
                    </button>
                    <button className="w-[180px] rounded-md shadow-lg shadow-sky-100/50 font-medium my-4 mx-auto py-2 text-white">
                      <a href="#service">Explore Programs</a>
                    </button>
                </div>
            </div>
            <div className="mx-auto justify-center mt-[15%]">
                <img src={actionImg} className="w-[300px] sm:w-[550px] md:w-[600px] rounded-xl" alt="" />
            </div>
        </div>
       
    )
}

export default Action;