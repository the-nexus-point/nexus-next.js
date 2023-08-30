import React from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link";
import {
    AiFillHome,
    AiFillFlag,
    AiOutlinePlus,
} from "react-icons/ai";

const MobileNav = () => {
    const navLinks = [
        { href: '/feed', name: 'Feed', icon: <AiFillHome className="w-5 h-5 mx-2" /> },
        { href: '/challenges', name: 'Challenges', icon: <AiFillFlag className="w-5 h-5 mx-2" /> },
    ];

    const pathname = usePathname()

    return (
        <div className="navbar fixed bottom-0 w-full bg-neutral-900 flex justify-between border-t border-gray-700 p-2 sm:hidden  min-[320px]:max-sm:block">
            <div className="flex justify-between">
                <Link
                    href="/create-post"
                    className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5 focus:outline-none focus:shadow-outline flex items-center justify-center space-x-2">
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
            </div>
        </div>
    )
}

export default MobileNav
