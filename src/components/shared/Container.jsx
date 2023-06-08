"use client";
import { useState } from "react";
import Link from "next/link";
import {
  AiFillHome,
  AiFillFlag,
  AiFillMessage,
  AiOutlinePlus,
  AiOutlineLogout,
} from "react-icons/ai";
import { SiMarketo } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";

const Container = ({ children, activeRoute }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="navbar flex justify-between border-b border-gray-700 p-2 block">
        <Link href="/" className="h-14 w-14 mx-8">
          <img src="/img/nexus-website-favicon-white.png" alt="Logo" />
        </Link>
        <Link
          href="/user"
          className="text-3xl mx-8 hover:text-black hover:opacity-75"
        >
          <FaUserCircle className="" />
        </Link>
      </div>
      <div className="h-full w-full flex overflow-hidden">
        <div className="h-full w-1/4 flex flex-col justify-between border-r border-gray-700 sm:max-lg:w-1/6 min-[320px]:max-sm:hidden">
          <div className="flex flex-col space-y-5 justify-between my-5">
            <Link
              href="/feed"
              className={`flex items-center justify-center rounded ${
                activeRoute === "feed"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <AiFillHome className="w-8 h-8 mx-2" />
              <span className="sm:max-lg:hidden">Feed</span>
            </Link>
            <Link
              href="/challenges"
              className={`flex items-center justify-center rounded ${
                activeRoute === "challenges"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <AiFillFlag className="w-8 h-8 mx-2" />
              <span className="sm:max-lg:hidden">Challenges</span>
            </Link>
            <Link
              href="/marketplace"
              className={`flex items-center justify-center rounded ${
                activeRoute === "marketplace"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <SiMarketo className="w-8 h-8 mx-2" />
              <span className="sm:max-lg:hidden">Market Place</span>
            </Link>
            <button className="rounded-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mx-5 focus:outline-none focus:shadow-outline flex items-center justify-center space-x-2">
              <AiOutlinePlus className="text-xl" />
              <span className="sm:max-lg:hidden">Create Post</span>
            </button>
          </div>
          <div className="flex flex-col justify-between mt-auto mx-5 mb-3 space-y-5">
            <button className="flex items-center justify-center border border-gray-700 hover:border-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <AiFillMessage className="mx-2" />
              <span className="sm:max-lg:hidden">feedback</span>
            </button>
            <button className="logout-button flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <AiOutlineLogout className="text-lg" />
              <span className="sm:max-lg:hidden">Logout</span>
            </button>
          </div>
        </div>
        <div className="w-full h-full flex flex-col overflow-y-auto scrollbar-none ">
          {/* Your content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
