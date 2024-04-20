import React from "react";

function Testimony(){
    return(
        <div  className="text-black mb-8 mx-6 " id="testimony">
            <div className="w-[350px] md:w-[550px] mt-[90px] mx-auto text-center justify-center">
                <p className="text-[#7AA2E3] font-bold p-2 text-xl">Boost Your Skills</p>
                <h1 className=" md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
                What people say about Akademy
                </h1>
                <p className="text-md text-black mt-4 mb-12">Discover the impact of our transformative programs</p>
            </div>

            <div className="w-[550px] mx-auto justify-center border-4 border-blue-300 rounded-2xl">
                <div>
                    <p>"Before Akademy, I struggled with time management. Now, I efficiently prioritize tasks and meet deadlines." </p>
                    <p>- Sarah, Project Manager</p>
                </div>
                <div>
                    <p>"Akademy's socializing and networking series boosted my confidence in professional social settings. I've since expanded my professional network significantly."</p>
                    <p>- Michael, Business Developer</p>
                </div>
                <div>
                    <p>"Thanks to Akademy, I conquered my fear of public speaking and now excel in presentations!"</p>
                    <p> - Emily, Marketing Pro</p>
                </div>
                <div>
                    <p>"Akademy's negotiation workshop equipped me with actionable strategies for success."</p>
                    <p>- David, Sales Exec</p>
                </div>
            </div>
        </div>
    )
}

export default Testimony;