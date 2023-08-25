"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import NavBg from "./NavBg";

export default function Navbar() {
    
const [showMenu, setShowMenu] = useState(false);
const [focusedLink, setFocusedLink] = useState("");
const pathname = usePathname();

const toggleMenu = () => {
    setShowMenu(!showMenu);
};

useEffect(() => {
    const handleResize = () => {
    if (window.innerWidth >= 700) {
        setShowMenu(false);
    }
    };

    window.addEventListener("resize", handleResize);

    setFocusedLink(pathname?.split("/")[1] || "");

    return () => {
    window.removeEventListener("resize", handleResize);
    };
}, [pathname]);

let Links =[
    {name:"소개하기",link:"/about"},
    {name:"공연영상",link:"/performance"},
    {name:"예매하기",link:"/tickets"},
    {name:"지원하기",link:"/recruit"},
];

return (
    <nav className="w-[full] flex relative bg-[white] z-50 px-[20px] font-['pretendard']">
        <NavBg>
        <div className="mx-auto lg:max-w-7xl md:items-center md:flex gap-[16px]">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/assets/images/layout/Logo.png" alt="Logo" width={165} height={30} onClick={showMenu?toggleMenu:undefined} className= "ml-[20px] md:ml-[80px] w-[165px] h-[30px] max-w-[165px] max-h-[30px]" priority/>
                </Link>
                <div className="md:hidden">
                    <button className="p-2 outline-none" onClick={toggleMenu}>
                    {showMenu ? (<Image src="assets/images/layout/close.svg" width={32} height={32} alt="logo" /> ) : ( <Image src="assets/images/layout/hamburger.svg" width={32} height={32} alt="logo" className="focus:border-none active:border-none" />)}
                    </button>
                </div>
            </div>
            <div className={`${ showMenu ? "flex flex-col bg-[white]" : "hidden flex-row justify-between md:pl-[18px]" } md:flex w-full items-center`}>
                <ul className={`${ showMenu ? "flex-col py-[40px] mt-12 mb-4 ": "flex-col md:flex md:flex-row md:gap-[103px] "}`}>
                    { Links.map((link) => (
                        <li key={link.name}  onClick={showMenu ? toggleMenu : undefined} className={` text-[#000] text-center hover:text-[#8E8E8E] ${ showMenu ? "text-[20px] w-[100%] h-[100%] mb-4":"text-[15px] w-[84px] h-[32px] font-[600] leading-[19px] flex-shrink-0 flex justify-center items-center"}`}>
                            <Link href={link.link} onClick={() => setFocusedLink(link.name)}>
                                <div className={focusedLink === link.name || pathname?.startsWith(link.link) ? "font-[600]" : ""}>{link.name}</div>
                            </Link>
                        </li>
                        ))}
                </ul>
                <ul className={`${ showMenu ? " my-12 flex flex-row gap-[60px] items-center justify-center mx-12":"hidden lg:flex lg:flex-row flex-row gap-[10px] items-center justify-center mr-[96px]"}`}>
                    <li className="w-[100%] h-[100%] mx-2" >
                    <Link href="https://www.youtube.com/@kahluaband8409" passHref>
                        <Image src="/assets/images/layout/kakaotalk.png" alt="카카오톡 채널" width={100} height={100} className="w-[28px] h-[28px]"/>
                    </Link>
                    </li>
                    <li className="w-[100%] h-[100%] mx-2">
                    <Link
                        href="https://instagram.com/kahlua_band_?igshid=MzRlODBiNWFlZA=="
                        passHref
                    >
                        <Image src="/assets/images/layout/instagram.png" alt="인스타그램" width={100} height={100} className="w-[28px] h-[28px]" />
                    </Link>
                    </li>
                    <li className="w-[100%] h-[100%] mx-2 ">
                    <Link href="https://www.youtube.com/@kahluaband8409" passHref>
                        <Image src="/assets/images/layout/youtube.png" alt="유튜브" width={100} height={100} className="w-[28px] h-[28px]" />
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
        </NavBg>
    </nav>
);
}