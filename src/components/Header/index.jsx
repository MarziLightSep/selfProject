"use client"

import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { MdHeatPump, MdOutlinePhoneAndroid } from "react-icons/md";
import { GrMailOption } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { useState } from "react";


const Header = () => {

    const [logoHover, setLogoHover] = useState(false);

    const notSubmitWithEnter = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex">
            <div 
            className="flex flex-col justify-center items-center m-2 w-auto pb-2 cursor-pointer relative"
            onMouseEnter={() => setLogoHover(true)} 
            onMouseLeave={() => setLogoHover(false)}
            >
                <div className="relative">
                    <Image
                        className="rounded-xl border-4 border-purple-800"
                        width={180}
                        height={150}
                        src="/logo.png"
                        alt="logo"
                    />
                </div>
                <div
                className={`
                    absolute w-full left-0
                    flex justify-between px-4
                    transition-all duration-300
                    ${logoHover ? "top-full opacity-100" : "top-[80%] opacity-0"}
                `}
                >
                    <FaInstagram size={30} className="text-slate-600 tansition-all duration-300 hover:text-rose-600" />
                    <FaTelegram size={30} className="text-slate-600 tansition-all duration-300 hover:text-sky-700" />
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex w-auto h-28 items-center justify-between bg-[#BD09B7] rounded-lg m-2 shadow-[0_0_2px_#800080,inset_0_0_2px_#800080,0_0_5px_#800080,0_0_15px_#800080,0_0_30px_#800080] p-3">
                    <div className="flex flex-col w-auto gap-2">
                        <div className="flex items-center gap-2">
                            <MdOutlinePhoneAndroid className="text-3xl"/>
                            <p className="text-xl font-semibold">09112223344</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GrMailOption className="text-3xl"/>
                            <p className="text-xl font-semibold">example@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col absolute left-4/7 -translate-x-1/2 items-center text-[#450242]">
                        <h1 className="text-4xl font-bold">FOGGY MOON</h1>
                        <p className="text-2xl">Art Gallery</p>
                    </div>
                    <div className="absolute top-6 right-6">
                        <CgMenuGridO className="text-4xl cursor-pointer hover:text-yellow-300 transition-all"/>
                    </div>
                </div>
                <div className="flex justify-between items-center h-15">
                    <div className="flex justify-end text-3xl gap-8 px-3">
                        <IoPersonSharp className="cursor-pointer text-gray-700 transition-all duration-300 hover:text-blue-600"/>
                        <FaHeart className="cursor-pointer text-gray-700 transition-all duration-300 hover:text-rose-600"/>
                    </div>
                    <div className="relative">
                        <ImSearch className="absolute right-8 top-4 text-xl text-slate-600 cursor-pointer transition-all duration-300 hover:text-red-600"/>
                        <input
                            type="text"
                            placeholder="Search artworks..."
                            className="flex w-150 rounded-full text-lg mx-3 px-2 py-2 border-3 border-[#e8cb0e] bg-slate-200 text-black outline-none"
                        />
                    </div>
                </div>
            </div>

        </div>
        
    );
}

export default Header;