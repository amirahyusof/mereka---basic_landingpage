import React from "react";
import speakingImg from './Asset/services/speaking.jpg';
import writingImg from './Asset/services/writing.jpg';
import nonImg from './Asset/services/non-verbal.jpg'
import negoImg from './Asset/services/negotiation.jpg';
import socialImg from './Asset/services/socializing.jpg';
import timeImg from './Asset/services/time.jpg';
import emotionalImg from './Asset/services/emotional.jpg';
import thinkingImg from './Asset/services/thinking.jpg';


function Services(){
    return(
        <div className="text-black my-[200px] mx-6 " id="service">
            <div className="w-[350px] md:w-[550px] mt-[90px] mx-auto text-center justify-center">
                <p className="text-[#7FC7D9] font-bold p-2 text-xl">Unlock Your Potential</p>
                <h1 className=" md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
                Our Training, Your Triumph
                </h1>
                <p className="text-md text-[#DCF2F1] mt-4 mb-12">Discover our comprehensive programs covering a wide array of crucial soft skills, including</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-8 md:gap-4 px-6 mx-auto text-center justify-center">
                <div className="border-4 border-white rounded-xl">
                    <img src={speakingImg} className="p-4" alt="" />    
                    <h4 className="font-bold">Public Speaking Mastery Program</h4>
                    <p className="hidden sm:block text-sm text-[#31363F] px-6 py-2">Master the art of effective communication and presentation.</p>
                </div>
                <div className="border-4 border-white rounded-xl">
                    <img src={nonImg} className="p-4" alt="" />   
                    <h4 className="font-bold">Non-Verbal Communication Course</h4>
                    <p className="hidden sm:block text-sm text-[#31363F] px-6 py-2">Learn the nuances of body language and its impact on interpersonal interactions.</p>
                </div>
                <div className="border-4 border-white rounded-xl">
                    <img src={negoImg} className="p-4" alt="" />
                    <h4 className="font-bold">Negotiation Skill Seminar</h4>
                    <p className="hidden sm:block text-sm text-[#31363F] px-6 py-2">Develop strategies for successful negotiation and conflict resolution.</p>
                </div>
                <div className="border-4 border-white rounded-xl">
                    <img src={thinkingImg} className="p-4" alt="" />
                    <h4 className="font-bold">Critical Thinking Bootcamp</h4>
                    <p className="hidden sm:block text-sm text-[#31363F] px-6 py-2">Enhance your problem-solving abilities and decision-making skills.</p>
                </div>
                <div className="border-4 border-white rounded-xl">
                    <img src={writingImg} className="p-4" alt="" />
                    <h4 className="font-bold">Business Writing Workshop</h4>
                    <p className="hidden sm:block text-sm text-[#31363F] px-6 py-2">Hone your written communication skills for professional correspondence.</p>
                </div>
                <div className="border-4 border-white rounded-xl">
                    <img src={socialImg} className="p-4 sm:h-[230px] sm:w-[430px]" alt="" />
                    <h4 className="font-bold">Socializing and Networking Series</h4>
                    <p className="hidden sm:block text-sm text-[#31363F] px-6 py-2">Build meaningful connections and navigate social situations with confidence.</p>
                </div>
                <div className="border-4 border-white rounded-xl">
                    <img src={timeImg} className="p-4" alt="" />
                    <h4 className="font-bold">Time Management Toolkit</h4>
                    <p className="hidden sm:block text-sm text-[#31363F] px-6 py-2">Acquire techniques to optimize productivity and prioritize tasks effectively.</p>
                </div>
                <div className="border-4 border-white rounded-xl">
                    <img src={emotionalImg} className="p-4" alt="" />
                    <h4 className="font-bold">Emotional Intelligence Course</h4>
                    <p className="hidden sm:block text-sm text-[#31363F] px-6 py-2">Develop self-awareness and interpersonal skills for effective leadership and collaboration.</p>
                </div>
            </div>

        </div>
    )
}

export default Services;