import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'

import {
    AiFillFlag,
} from "react-icons/ai";

const LeftSidebar = () => {

    const navLinks = [
        { href: '/challenges', name: 'Challenges', icon: <AiFillFlag className="w-5 h-5 mx-2" /> },
    ];

    const pathname = usePathname()


    return (
        <div className="h-full w-1/4 flex flex-col justify-between sm:max-lg:w-1/6 min-[320px]:max-sm:hidden">
            <div className="flex flex-col space-y-5 justify-between my-5">
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center rounded ${isActive ? 'bg-zinc-700/50' : 'bg-zinc-900/25 hover:bg-zinc-800/40'
                                } font-bold py-2 px-4 mx-5`}
                        >
                            {link.icon}
                            <span className="sm:max-lg:hidden">{link.name}</span>
                        </Link>
                    )
                })}
            </div>
            <div className="flex flex-col justify-between mt-auto mx-5 mb-3 space-y-5">
            </div>
        </div>
    )
}

export default LeftSidebar
