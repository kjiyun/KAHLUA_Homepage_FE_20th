"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
    setShowMenu(!showMenu);
};

const closeMenu = () => {
    setShowMenu(false);
};

useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 700) {
            setShowMenu(false);
        }
    };

    window.addEventListener("resize", handleResize);

    return () => {
    window.removeEventListener("resize", handleResize);
    };
}, []);

let Links =[
    {name:"소개하기",link:"/about"},
    {name:"공연 영상 보기",link:"/performance"},
    {name:"예매하기",link:"/tickets"},
    {name:"지원하기",link:"/recruit"},
];

return (
    <nav className="w-full shadow-sm bg-white fixed z-10 py-[20px] px-[20px] border-b">
        <div className="mx-auto lg:max-w-7xl md:items-center md:flex gap-[16px]">
            {/* LOGO */}
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/Logo.png" alt="Logo" width={192} height={36} style={{maxWidth:"192px", maxHeight:"36px"}} />
                </Link>
            
                <div className="md:hidden">
                    <button className="p-2 outline-none" onClick={toggleMenu}>
                    {showMenu ? (
                        <Image src="/close.svg" width={32} height={32} alt="logo" />
                    ) : (
                        <Image
                        src="/hamburger.svg"
                        width={32}
                        height={32}
                        alt="logo"
                        className="focus:border-none active:border-none"
                        />
                    )}
                    </button>
                </div>
            </div>

            <div
            className={`${
                showMenu ? "mt-8 mb-8 flex flex-col" : "hidden flex-row justify-between px-8 md:px-0"
            } md:flex w-full items-center`}
            >
                <ul className={`${ showMenu ? "flex-col py-[40px] mt-12 mb-4": "flex-col md:flex md:flex-row md:gap-[15px]"}`}>
                    {
                        Links.map((link) => (
                        <li key={link.name} className={` text-[#000] text-center hover:font-semibold ${ showMenu ? "text-[20px] w-[100%] h-[100%] mb-4":"text-[13px] w-[85px] h-[32px] font-medium flex-shrink-0 flex justify-center items-center"}`}>
                            <Link href={link.link} onClick={closeMenu} >{link.name}</Link>
                        </li>
                        ))
                    }
                </ul>

                <ul className={`${
                    showMenu ? " my-12 flex flex-row gap-[60px] items-center justify-center mx-12":"hidden lg:flex lg:flex-row flex-row gap-[12px] items-center justify-center"}`}>
                    <li className="w-[100%] h-[100%] mx-2 ">
                    <Link href="https://www.youtube.com/@kahluaband8409" passHref>
                        <Image src="/youtube.png" alt="유튜브" width={24} height={18} />
                    </Link>
                    </li>
                    <li className="w-[100%] h-[100%] mx-2">
                    <Link href="https://www.youtube.com/@kahluaband8409" passHref>
                        <Image src="/kakaotalk.png" alt="카카오톡 채널" width={22} height={22} />
                    </Link>
                    </li>
                    <li className="w-[100%] h-[100%] mx-2">
                    <Link
                        href="https://instagram.com/kahlua_band_?igshid=MzRlODBiNWFlZA=="
                        passHref
                    >
                        <Image src="/instagram.png" alt="인스타그램" width={20} height={20} />
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
}