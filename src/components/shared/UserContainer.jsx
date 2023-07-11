"use client";
import React from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineLogout,
  AiFillHome,
} from "react-icons/ai";
import { RxActivityLog } from "react-icons/rx";
import { BiEditAlt } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

const UserContainer = ({ children }) => {
  const navLinks = [
    { href: "/user/profile", name: "Profile", icon: <AiOutlineUser className="w-5 h-5 mx-2" /> },
    { href: "/user/activities", name: "Activities", icon: <RxActivityLog className="w-5 h-5 mx-2" /> },
    { href: "/user/settings", name: "Account Settings", icon: <CiSettings className="w-5 h-5 mx-2" /> },
  ];

  const pathname = usePathname()


  return (
    <div className="w-full h-screen flex flex-col">
      <div className="h-full w-full flex overflow-hidden">
        <div className="h-full w-1/4 flex flex-col justify-between border-r border-gray-700 sm:max-lg:w-1/6 min-[320px]:max-sm:hidden">
          <div className="flex flex-col space-y-5 justify-between my-5">
            <Link href="/feed" className="h-14 w-14 mx-8 cursor-pointer">
              <img src="/img/nexus-website-favicon-white.png" alt="Logo" />
            </Link>
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-center rounded ${isActive ? "bg-neutral-900/50" : "bg-neutral-900/25 hover:bg-neutral-900/40"
                    } font-bold py-2 px-4 mx-5`}
                >
                  {link.icon}
                  <span className="sm:max-lg:hidden">{link.name}</span>
                </Link>
              )
            })}
          </div>
          <div className="flex flex-col justify-between mt-auto mx-5 mb-3 space-y-5">
            <Link
              href="/logout"
              className="logout-button flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <AiOutlineLogout className="text-lg" />
              <span className="sm:max-lg:hidden">Logout</span>
            </Link>
          </div>
        </div>
        <div className="w-full">
          {/* Your content */}
          {children}
        </div>
      </div>
      <div className="navbar fixed bottom-0 w-full bg-neutral-900 flex justify-between border-t border-gray-700 p-2 hidden min-[320px]:max-sm:block">
        <div className="flex justify-between">
          <Link
            href="/feed"
            className={`flex items-center justify-center rounded ${"bg-neutral-900/25 hover:bg-neutral-900/40"} font-bold py-2 px-4`}
          >
            <AiFillHome className="w-5 h-5 mx-2 text-lg" />
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-center rounded ${isActive ? "bg-neutral-900/50" : "bg-neutral-900/25 hover:bg-neutral-900/40"
                  } font-bold py-2 px-4`}
              >
                {link.icon}
              </Link>
            )
          })}
          <Link
            href="/logout"
            className="logout-button flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <AiOutlineLogout className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
