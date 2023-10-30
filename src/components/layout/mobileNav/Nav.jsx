import React from 'react'
import Link from "next/link";
import {
    AiFillFlag,
} from "react-icons/ai";

const MobileNav = () => {

    return (
        <div className="navbar fixed bottom-0 w-full bg-neutral-900 flex justify-between border-t border-gray-700 p-2 sm:hidden  min-[320px]:max-sm:block">
            <div className="flex justify-between">
                <Link
                    href="/challenges"
                    className={`flex items-center justify-center rounded bg-neutral-900/50 hover:bg-neutral-900/40 font-bold py-2 px-4`}  >
                    <AiFillFlag className="w-5 h-5 mx-2" />
                </Link>
            </div>
        </div>
    )
}

export default MobileNav
