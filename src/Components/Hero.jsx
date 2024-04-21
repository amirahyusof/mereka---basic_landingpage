import React from "react";
import { ReactTyped } from "react-typed";
import heroImg from './Asset/hero.jpeg';

function Hero(){
    return(
        <div className="text-black grid grid-cols-2" id="home">
            <div className="max-w-[550px] mt-[150px] w-full mx-auto text-center flex flex-col justify-center">
                <p className="text-[#7FC7D9] font-bold p-2 text-xl">Discover limitless potential with Akademy</p>
                <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
                Unleash Your Greatness Today
                </h1>
                <div className="flex justify-center items-center text-[#DCF2F1]">
                    <ReactTyped
                    className="md:text-3xl sm:text-2xl text-xl font-bold pt-4 pl-2"
                    strings={[
                        "Ignite Your Potential and Transform Your Future!",
                        "Discover Your Hidden Potential and Soar to Success!",
                        "Unleash Your Potential and Conquer Your Dreams!"

                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    ></ReactTyped>
                </div>
                <button className="bg-[#7FC7D9] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-white" id="feature">
                      <a href="#service">Let's Explore</a>
                </button>
            </div>
            <img className="rounded-xl mt-[150px] w-450px h-[350px] md:w-[550px] md:h-[500px] md:ml-8 px-4" src={heroImg} alt="" />
        </div>
    )
}

export default Hero;