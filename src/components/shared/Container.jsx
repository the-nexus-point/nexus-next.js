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
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="navbar flex justify-between border-b border-gray-700 p-2">
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
        <div className="h-full w-1/4 flex flex-col justify-between border-r border-gray-700">
          <div className="flex flex-col space-y-5 justify-between my-5">
            <Link
              href="/feed"
              className={`flex items-center rounded ${
                activeRoute === "feed"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <AiFillHome className="w-8 h-8 mx-2" />
              Feed
            </Link>
            <Link
              href="/challenges"
              className={`flex items-center rounded ${
                activeRoute === "challenges"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <AiFillFlag className="w-8 h-8 mx-2" />
              Challenges
            </Link>
            <Link
              href="/marketplace"
              className={`flex items-center rounded ${
                activeRoute === "marketplace"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <SiMarketo className="w-8 h-8 mx-2" />
              Market Place
            </Link>
            <button className="rounded-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mx-5 focus:outline-none focus:shadow-outline flex items-center justify-center space-x-2">
              <AiOutlinePlus className="text-xl" />
              <span>Create Post</span>
            </button>
          </div>
          <div className="flex flex-shrink-0 justify-between mt-auto mb-5 mx-5">
            <button className="flex items-center border border-gray-700 hover:border-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <AiFillMessage className="mx-2" />
              <span>feedback</span>
            </button>
            <button className="logout-button flex items-center space-x-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <AiOutlineLogout className="text-lg" />
              <span>Logout</span>
            </button>
          </div>
        </div>
        <div className="w-3/4 h-full flex flex-col overflow-y-auto scrollbar-none">
          {/* Your content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
