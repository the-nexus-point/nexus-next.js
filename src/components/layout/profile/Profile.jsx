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
import Link from 'next/link';

const Profile = () => {
    return (
        <div>
            <Menu className="">
                <MenuButton as={Avatar} size="sm" cursor={'pointer'} src="/path/to/avatar.jpg" />
                <MenuList className="bg-black">
                    <MenuGroup title='yourname'>
                        <Link href="/[id]" as="/yourusername" >
                            <MenuItem className='hover:bg-zinc-800' ><BsFillPersonFill className="text-xl mx-2" />  Account</MenuItem>
                        </Link>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title='Help'>
                        <MenuItem className='hover:bg-zinc-800'><MdOutlineSettings className="text-xl mx-2" /> Settings</MenuItem>
                        <MenuItem className='hover:bg-zinc-800'><AiOutlineLogout className="text-xl mx-2 text-red-500" /> Logout</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </div>
    );
};

export default Profile;
