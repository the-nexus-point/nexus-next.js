import React from "react";
import Link from "next/link";
import {
  AiOutlineUser,
  AiFillMessage,
  AiOutlineLogout,
  AiFillHome,
  AiFillFlag,
} from "react-icons/ai";
import { RxActivityLog } from "react-icons/rx";
import { BiEditAlt } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

const UserContainer = ({ children, activeRoute }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="h-full w-full flex overflow-hidden">
        <div className="h-full w-1/4 flex flex-col justify-between border-r border-gray-700 sm:max-lg:w-1/6 min-[320px]:max-sm:hidden">
          <div className="flex flex-col space-y-5 justify-between my-5">
            <Link href="/feed" className="h-14 w-14 mx-8 cursor-pointer">
              <img src="/img/nexus-website-favicon-white.png" alt="Logo" />
            </Link>
            <Link
              href="/user/profile"
              className={`flex items-center justify-center rounded ${
                activeRoute === "profile"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <AiOutlineUser className="w-8 h-8 mx-2" />
              <span className="sm:max-lg:hidden">Profile</span>
            </Link>
            <Link
              href="/user/activities"
              className={`flex items-center justify-center rounded ${
                activeRoute === "activities"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <RxActivityLog className="w-8 h-8 mx-2" />
              <span className="sm:max-lg:hidden">Activities</span>
            </Link>
            <Link
              href="/user/edit"
              className={`flex items-center justify-center rounded ${
                activeRoute === "edit"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <BiEditAlt className="w-8 h-8 mx-2" />
              <span className="sm:max-lg:hidden">Edit Profile</span>
            </Link>
            <Link
              href="/user/settings"
              className={`flex items-center justify-center rounded ${
                activeRoute === "settings"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <CiSettings className="w-8 h-8 mx-2" />
              <span className="sm:max-lg:hidden">Account Settings</span>
            </Link>
          </div>
          <div className="flex flex-col justify-between mt-auto mx-5 mb-3 space-y-5">
            <button className="flex items-center justify-center border border-gray-700 hover:border-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <AiFillMessage className="mx-2" />
              <span className="sm:max-lg:hidden">Feedback</span>
            </button>
            <button className="logout-button flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <AiOutlineLogout className="text-lg" />
              <span className="sm:max-lg:hidden">Logout</span>
            </button>
          </div>
        </div>
        <div className="">
          {/* Your content */}
          {children}
        </div>
      </div>
      <div className="navbar flex justify-between border-t border-gray-700 p-2 hidden min-[320px]:max-sm:block">
        <div className="flex justify-between">
          <Link
            href="/feed"
            className={`flex items-center justify-center rounded ${
              activeRoute === "feed"
                ? `bg-neutral-900/50`
                : `bg-neutral-900/25 hover:bg-neutral-900/40`
            } font-bold py-2 px-4`}
          >
            <AiFillHome className="text-lg" />
          </Link>
          <Link
            href="/user/activities"
            className={`flex items-center justify-center rounded ${
              activeRoute === "marketplace"
                ? `bg-neutral-900/50`
                : `bg-neutral-900/25 hover:bg-neutral-900/40`
            } font-bold py-2 px-4`}
          >
            <RxActivityLog className="text-lg" />
          </Link>
          <Link
            href="/user/edit"
            className={`flex items-center justify-center rounded ${
              activeRoute === "marketplace"
                ? `bg-neutral-900/50`
                : `bg-neutral-900/25 hover:bg-neutral-900/40`
            } font-bold py-2 px-4`}
          >
            <BiEditAlt className="text-lg" />
          </Link>
          <Link
            href="/user/settings"
            className={`flex items-center justify-center rounded ${
              activeRoute === "marketplace"
                ? `bg-neutral-900/50`
                : `bg-neutral-900/25 hover:bg-neutral-900/40`
            } font-bold py-2 px-4`}
          >
            <CiSettings className="text-lg" />
          </Link>
          <button className="logout-button flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <AiOutlineLogout className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserContainer;
