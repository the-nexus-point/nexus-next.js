"use client";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import {
  AiFillHome,
  AiFillFlag,
  AiOutlinePlus,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const Layout = ({ children, }) => {

  const navLinks = [
    { href: '/feed', name: 'Feed', icon: <AiFillHome className="w-5 h-5 mx-2" /> },
    { href: '/challenges', name: 'Challenges', icon: <AiFillFlag className="w-5 h-5 mx-2" /> },
  ];

  const pathname = usePathname()

  return (
    <div className="w-full h-screen flex flex-col bg-black">
      <div className="navbar flex justify-between items-center p-2">
        <Link href="/" className="h-14 w-14 mx-8">
          <img src="/img/nexus-website-favicon-white.png" alt="Logo" />
        </Link>
        <Link
          href="/user"
          className="text-3xl mx-8 hover:text-gray hover:opacity-75"
        >
          <FaUserCircle className="" />
        </Link>
      </div>
      <div className="h-full w-full flex overflow-hidden">
        <div className="h-full w-1/4 flex flex-col justify-between sm:max-lg:w-1/6 min-[320px]:max-sm:hidden">
          <div className="flex flex-col space-y-5 justify-between my-5">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-center rounded ${isActive ? 'bg-neutral-700/50' : 'bg-neutral-900/25 hover:bg-neutral-800/40'
                    } font-bold py-2 px-4 mx-5`}
                >
                  {link.icon}
                  <span className="sm:max-lg:hidden">{link.name}</span>
                </Link>
              )
            })}
            <Link
              href="/create-post"
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5 focus:outline-none focus:shadow-outline flex items-center justify-center space-x-2">
              <AiOutlinePlus className="text-xl" />
              <span className="sm:max-lg:hidden">Create Post</span>
            </Link>
          </div>
          <div className="flex flex-col justify-between mt-auto mx-5 mb-3 space-y-5">
            <Link
              href="/logout"
              className="logout-button flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              <AiOutlineLogout className="text-lg" />
              <span className="sm:max-lg:hidden">Logout</span>
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex flex-col overflow-y-auto scrollbar-none rounded-lg">
          {/* Your content */}
          {children}
        </div>
      </div>
      <div className="navbar fixed bottom-0 w-full bg-neutral-900 flex justify-between border-t border-gray-700 p-2 hidden min-[320px]:max-sm:block">
        <div className="flex justify-between">
          <Link
            href="/create-post"
            className="rounded-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mx-5 focus:outline-none focus:shadow-outline flex items-center justify-center space-x-2">
            <AiOutlinePlus className="text-xl" />
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-center rounded ${isActive ? `bg-neutral-900/50` : `bg-neutral-900/25 hover:bg-neutral-900/40`
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

export default Layout;
