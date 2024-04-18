import React from "react";
import { ReactTyped } from "react-typed";

function Hero(){
    return(
        <div className="text-black" id="home">
            <div className="max-w-[750px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#F8F6E3] font-bold p-2 text-xl">Craft Your Path to Excellence with Akademy</p>
                <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
                Embark on a Journey to Unlock Your True Potential and Thrive!
                </h1>
                <div className="flex justify-center items-center">
                    <ReactTyped
                    className="md:text-3xl sm:text-2xl text-xl font-bold pt-4 pl-2"
                    strings={[
                        "Ignite Your Potential and Transform Your Future!",
                        "Discover Your Hidden Potential and Soar to Success!",
                        "Unleash Your Potential and Conquer Your Dreams!"

                    ]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                    ></ReactTyped>
                </div>
                <button className="bg-[#6AD4DD] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Connect with Us</button>
            </div>
            <img src="./components" alt="" />
        </div>
    )
}

export default Hero;