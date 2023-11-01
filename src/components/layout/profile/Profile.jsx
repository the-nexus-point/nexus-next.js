import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Avatar,
} from '@chakra-ui/react';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineSettings } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import Link from "next/link";

const Profile = () => {
    const handleSignOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/signup';
    };
    const userName = 'User Name';
    return (
        <div>
            <Menu className="">
                <MenuButton as={Avatar} size="sm" cursor={'pointer'} />
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
