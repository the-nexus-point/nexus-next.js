"use client";
import Link from "next/link";
import LeftSidebar from './sidebar/LeftSidebar';
import MobileNav from './mobileNav/Nav';
import Profile from "./profile/Profile";

const Layout = ({ children, }) => {

  return (
    <div className="w-full h-screen flex flex-col bg-zinc-950">
      <div className="navbar flex justify-between items-center p-2">
        <Link href="/" className="h-14 w-14 mx-8">
          <img src="/img/nexus-website-favicon-white.png" alt="Logo" />
        </Link>
        <Profile />
      </div>
      <div className="h-full w-full flex overflow-hidden">
        <LeftSidebar />
        <div className="w-full h-full p-2 flex flex-col overflow-y-auto scrollbar-none rounded-3xl space-y-10 bg-zinc-900 ">
          {children}
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Layout;
