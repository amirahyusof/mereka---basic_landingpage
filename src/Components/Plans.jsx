import React from "react";
import { CgChevronRightO } from "react-icons/cg";

function Plans(){
    return(
        <div className="text-black py-20" id="plans">
            <div className="w-[350px] md:w-[550px]  mx-auto text-center justify-center">
                <p className="text-[#365486] font-bold p-2 text-xl mt-[15%]">Subscription Choices</p>
                <h1 className=" md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
                Elevate Your Learning Journey
                </h1>
                <p className="text-md text-[#DCF2F1] mt-4 mb-8">Choose the plan that suits your needs:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-[350px] md:w-[1240px] gap-6 mt-8">
                <div className="border-4  border-blue-400 rounded-2xl p-4 m-4">
                    <p className="my-4">Basic Plan: Essential Access</p>
                    <h1 className="text-4xl my-2">Free</h1>
                    <p className="text-base my-6 font-thin">Dive into essential soft skills training tailored to your needs, without the commitment of a subscription.</p>
                    <ul className="list-none text-sm my-4">
                        <li className="flex items-center">
                            <CgChevronRightO size={23} color="blue" className="mr-2" />Select programs available for one-time purchase.
                        </li>
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="blue" className="mr-2" />Access to fundamental soft skills training.</li>
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="blue" className="mr-2" />Pay as you go with no monthly commitments.</li>
                    </ul>
                    <button className="bg-[#365486] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-white">Get Started Free</button>
                </div>

                <div className="border-4  border-blue-400 rounded-2xl p-4 m-4">
                    <p className="my-4">Pro Plan: Unlimited Learning</p>
                    <h1 className="text-4xl my-6">RM 50<span className="text-xl">/month</span></h1>
                    <p className="text-md my-2">Immerse yourself in comprehensive soft skills training, with the freedom to explore and grow at your own pace.</p>
                    <ul className="list-none text-sm my-4">
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="blue" className="mr-2" />Unlimited access to all programs.
                        </li>
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="blue" className="mr-2" />Monthly subscription model for flexibility.
                        </li>
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="blue" className="mr-2" />Dive deep into advanced soft skills training.
                        </li>
                    </ul>
                    <button className="bg-[#365486] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-white">Get Pro Plan</button>
                </div>

                <div className="border-4 border-blue-400 rounded-2xl p-4 m-4">
                    <p className="my-4">Premium Plan: Tailored Excellence</p>
                    <h1 className="text-4xl my-6">RM 150<span  className="text-xl">/month</span></h1>
                    <p className="text-md my-2">Accelerate your growth and unlock your full potential with tailored guidance and support.</p>
                    <ul className="text-sm my-4">
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="blue" className="mr-2" />Exclusive access to premium content.</li>
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="blue" className="mr-2" />Personalized coaching sessions with industry experts.</li>
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="blue" className="mr-2" />Tailored guidance to maximize your potential.</li>
                    </ul>
                    <button className="bg-[#365486] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-white">Get Premium Plan</button>
                </div>
            </div>
        </div>
    )
}

export default Plans;