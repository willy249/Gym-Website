"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 當捲動的垂直距離超過 50 像素時設置 headerActive 狀態為 true
      setHeaderActive(window.scrollY > 50);
    };

    // 添加滾動事件監聽器
    window.addEventListener("scroll", handleScroll);

    // 移除滾動事件監聽器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[100px] transition-all z-50`}
    >
      <div className=" container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link href="">
          <Image
            src={"/assets/img/logo.png"}
            width={117}
            height={55}
            alt=""
            priority
          />
        </Link>
        {/* mobile nav */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"} ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          } flex flex-col gap-8 text-center text-white text-base fixed bg-primary-200 w-full left-0 top-[124px] uppercase font-medium xl:hidden transition-all`}
        />
        {/* desktop nav */}
        <Nav containerStyles="flex gap-4 text-white text-base uppercase font-medium transition-all hidden xl:flex" />

        {/* All btn */}
        <div className=" flex items-center gap-4">
          {/* login & Sign up btn */}
          <div className=" text-white flex items-center gap-4">
            <button className=" hover:text-accent hover:border-accent transition-all text-base  font-medium border border-white px-4 py-2 rounded-lg">
              Log In
            </button>
            <button className=" bg-white text-black hover:text-accent hover:border-accent transition-all text-base  font-medium border border-white px-4 py-2 rounded-lg">
              Sign Up
            </button>
          </div>
          {/* hide/open menu btn */}
          <button
            onClick={() => setOpenNav(!openNav)}
            className=" text-white xl:hidden"
          >
            <MdMenu className=" text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
