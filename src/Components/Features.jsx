import React from "react";
import learningImg from './Asset/features/learning.jpg';
import progressImg from './Asset/features/progress.jpg';

function Features(){
    return(
        <div className="text-black mb-8" id="feature">
            <div className="w-[650px] md:w-[850px] mt-[90px] mx-auto text-center justify-center">
                <p className="text-[#7AA2E3] font-bold p-2 text-xl">Features</p>
                <h1 className=" md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
                Embark on a journey of growth with Akademy's interactive learning platform
                </h1>
                <p className="text-md text-white mt-4 mb-12">At Akademy, we provide an enriching environment where you can immerse yourself in</p>
            </div>
            <div className="grid gap-6 text-white px-6 mx-auto justify-center">
                <div className="max-w-[650px] border-4 border-white p-4 rounded-2xl grid grid-cols-2">
                    <img src={learningImg} className="w-[200px] rounded-lg" alt="" />
                    <div>
                    <h4 className="text-[#7AA2E3]">Interactive Learning</h4>
                    <p>Engage in immersive learning experiences tailored to your needs.</p>
                    </div>
                    
                </div>
                <div className="max-w-[650px] border-4 border-white p-4 rounded-2xl grid grid-cols-2">
                    <div>
                    <h4 className="text-[#7AA2E3]">Progress Tracking</h4>
                    <p>Monitor your growth and track your achievements as you progress</p>
                    </div>
                    <img src={progressImg} className="w-[230px] rounded-lg ml-12" alt="" />
                </div>
                <div className="border-4 border-white p-2 rounded-2xl">
                    <img src="" alt="" />
                    <h4 className="text-[#7AA2E3]">Expert Guidance</h4>
                    <p> Learn from industry experts and seasoned professionals in each field</p>
                </div>
                <div className="border-4 border-white p-2 rounded-2xl">
                    <img src="" alt="" />
                    <h4 className="text-[#7AA2E3]">Community Support</h4>
                    <p>Connect with a vibrant community of learners for peer support and networking.</p>
                </div>
            </div>
        </div>
    )
}

export default Features;