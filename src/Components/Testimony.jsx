import React from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';




function Testimony(){

    return(
        <div  className="text-black mx-6 my-[150px]" id="testimony">
            <div className="w-[350px] md:w-[550px]  mx-auto text-center justify-center">
                <p className="text-[#7FC7D9] font-bold p-2 text-xl">Boost Your Skills</p>
                <h1 className=" md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
                What people say about 
                <span className="text-white"> Aka</span><span className="text-[#0F1035]">demy</span>
                </h1>
                <p className="text-md text-[#DCF2F1] mt-4 mb-12 p-2">Discover the impact of our transformative programs</p>
            </div>


            <div className="bg-[#365486] text-white sm:w-[650px] md:w-[850px] sm:h-[250px] md:h-[300px] mx-auto justify-center border-4 border-blue-300 rounded-2xl">
            <Swiper
                slidesPerView={1}
                speed={500}
                loop={true}
                pagination={{ clickable : true}} 
                autoplay={true}
                space-between={10}
                className="m-6 mx-auto justify-center align-middle text-center"
            >
                <SwiperSlide className="mb-16">
                    <p className="text-2xl md:text-4xl mb-4 p-4">"Before Akademy, I struggled with time management. Now, I efficiently prioritize tasks and meet deadlines." </p>
                    <p className="text-center text-md md:text-lg">- Sarah, Project Manager -</p>
                </SwiperSlide>
                <SwiperSlide className="mb-16">
                    <p className="text-2xl md:text-4xl mb-2 p-4">"Akademy's socializing and networking series boosted my confidence in professional social settings. I've since expanded my professional network significantly."</p>
                    <p className="text-center text-md md:text-lg">- Michael, Business Developer -</p>
                </SwiperSlide>
                <SwiperSlide  className="mb-16">
                    <p className="text-2xl md:text-4xl mt-6 mb-2 p-4">"Thanks to Akademy, I conquered my fear of public speaking and now excel in presentations!"</p>
                    <p className="text-center text-md md:text-lg"> - Emily, Marketing Pro -</p>
                </SwiperSlide>
                <SwiperSlide className="mb-16">
                    <p className="text-2xl md:text-4xl mt-6 mb-2 p-4">"Akademy's negotiation workshop equipped me with actionable strategies for success."</p>
                    <p className="text-center text-md md:text-lg">- David, Sales Exec -</p>
                </SwiperSlide>
            </Swiper>
            </div>

            
           
        </div>
    )
}

export default Testimony;