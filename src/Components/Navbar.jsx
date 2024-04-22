import React from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Navbar(){
    const [nav, setNav] = React.useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="fixed w-full bg-[#365486] top-0 z-50 transition-all duration-1000">
            <div className="flex justify-between items-center h-24 px-16 text-white shadow-lg shadow-blue-300">
                <h1 className="w-full sm:ml-4 text-3xl font-bold text-[#F8F6E3]">
                    <a href="#home">Aka<span className="text-[#0F1035]">demy</span></a></h1>
                <ul className="hidden md:flex mx-6 w-[50%] left-[50%]">
                    <li className="p-3">
                        <a href="#home">Home</a>
                    </li>
                    <li className="p-3">
                        <a href="#feature">Features</a>
                    </li>
                    <li className="p-3">
                        <a href="#plans">Plans</a>
                    </li>
                    <li className="bg-[#7FC7D9] w-[160px] rounded-md font-medium p-3 text-white">
                        <a href="#contact" className="mx-auto justify-center">Connect with Us</a>
                    </li>
                </ul>

            <div onClick={handleNav} className="block md:hidden">
                {nav? <AiOutlineCloseCircle className="fixed left-[43%]" size={26}/> : <RiMenuUnfoldFill size={26} /> }

            </div>

            <div className= {nav ? "fixed right-0 top-0 w-[50%] h-full border-r border-r-white-900 bg-[#DCF2F1]" : "fixed left-[-100%]"}>
                <ul className="md:flex p-2 px-8 text-md sm:text-xl mt-16 text-black">
                    <li className="p-3">
                        <a href="#home">Home</a>
                    </li>
                    <li className="p-3">
                        <a href="#feature">Features</a>
                    </li>
                    <li className="p-3">
                        <a href="#plans">Plans</a>
                    </li>
                    <li className="bg-[#365486] w-[220px] rounded-md font-medium p-3 text-white">
                        <a href="#contact">Connect with Us</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        
    )
}

export default Navbar;