import React from 'react'
import Link from "next/link";
import {
    AiFillFlag,
} from "react-icons/ai";
import { MdLeaderboard } from 'react-icons/md';
import { HiSpeakerphone } from 'react-icons/hi';

const MobileNav = () => {
    const navLinks = [
        { href: '/challenges', name: 'Challenges', icon: <AiFillFlag className="w-5 h-5 mx-2" /> },
        { href: '/leaderboard', name: 'Leaderboard', icon: <MdLeaderboard className="w-5 h-5 mx-2" /> },
        { href: '/announcement', name: 'Announcement', icon: <HiSpeakerphone className="w-5 h-5 mx-2" /> },
    ];

    return (
        <div className="navbar fixed bottom-0 w-full bg-neutral-900 flex justify-between border-t border-gray-700 p-2 sm:hidden min-[320px]:max-sm:block">
            <div className="flex justify-between">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center justify-center rounded bg-neutral-900/50 hover:bg-neutral-900/40 font-bold py-2 px-4`}
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MobileNav
