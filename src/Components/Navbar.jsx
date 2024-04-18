import React from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Navbar(){
    const [nav, setNav] = React.useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="static flex justify-between items-center h-24 px-16 text-white bg-[#B0A695]">
                <h1 className="w-full ml-4 text-2xl font-bold text-[#EBE3D5]">Aka<span className="text-[#776B5D]">demy</span></h1>
                <ul className="hidden md:flex mx-6 w-[50%] left-[50%]">
                    <li className="p-3">
                        <a href="#home">Home</a>
                    </li>
                    <li className="p-3">
                        <a href="#feature">Features</a>
                    </li>
                    <li className="p-3">
                        <a href="testimoni">Testimonials</a>
                    </li>
                    <li className="p-3">
                        <a href="#plans">Plans</a>
                    </li>
                    <li className="p-3">
                        <a href="#contact">Connect with Us</a>
                    </li>
                </ul>

            <div onClick={handleNav} className="block md:hidden">
                {nav? <AiOutlineCloseCircle className="fixed left-[51%]"  size={26}/> : <RiMenuUnfoldFill size={26} /> }

            </div>

            <div className= {nav ? "fixed right-0 top-0 w-[45%] h-full border-r border-r-white-900 bg-[#776B5D]" : "fixed left-[-100%]"}>
                <ul className="md:flex p-2 px-8 text-xl mt-16 text-white uppercase">
                    <li className="p-3">
                        <a href="#home">Home</a>
                    </li>
                    <li className="p-3">
                        <a href="#feature">Features</a>
                    </li>
                    <li className="p-3">
                        <a href="#testimoni">Testimonials</a>
                    </li>
                    <li className="p-3">
                        <a href="#plans">Plans</a>
                    </li>
                    <li className="p-3">
                        <a href="#contact">Connect with Us</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;