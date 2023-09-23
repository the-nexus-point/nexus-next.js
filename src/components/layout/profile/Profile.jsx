import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Avatar,
    Button,
} from '@chakra-ui/react';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineSettings } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from "next/link";

const Profile = () => {
    const { data: session } = useSession(); // Use the useSession hook to get session data
    const userName = session?.user?.name;
    console.log('Session Data:', session);


    const handleSignOut = async () => {
        const response = await signOut({ redirect: false, callbackUrl: '/' });

        if (response.error) {
            console.error('Sign out error:', response.error);
        } else {
            // The user has been successfully signed out
        }
    }


    return (
        <div>
            <Menu className="">
                <MenuButton as={Avatar} size="sm" cursor={'pointer'} src={session?.user?.image} />
                <MenuList className="bg-black">
                    <MenuGroup title={userName}>
                        <Link href="/account"><MenuItem className='hover:bg-zinc-800' ><BsFillPersonFill className="text-xl mx-2" />Account</MenuItem></Link>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title='Help'>
                        <MenuItem className='hover:bg-zinc-800'><MdOutlineSettings className="text-xl mx-2" /> Settings</MenuItem>
                        <MenuItem className='hover:bg-zinc-800' onClick={handleSignOut}><AiOutlineLogout className="text-xl mx-2 text-red-500" />Sign Out</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </div>
    );
};

export default Profile;
