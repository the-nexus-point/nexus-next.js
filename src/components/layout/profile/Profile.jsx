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
import { signOut, useSession } from 'next-auth/react';


const Profile = () => {
    const { data: session } = useSession(); // Use the useSession hook to get session data
    const userName = session?.user?.name;
    console.log(session?.user);

    return (
        <div>
            <Menu className="">
                <MenuButton as={Avatar} size="sm" cursor={'pointer'} src={session?.user?.image} />
                <MenuList className="bg-black">
                    <MenuGroup title={userName}>
                        <MenuItem className='hover:bg-zinc-800' ><BsFillPersonFill className="text-xl mx-2" />  Account</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title='Help'>
                        <MenuItem className='hover:bg-zinc-800'><MdOutlineSettings className="text-xl mx-2" /> Settings</MenuItem>
                        <MenuItem className='hover:bg-zinc-800'><AiOutlineLogout className="text-xl mx-2 text-red-500" onClick={() => signOut()} /> Logout</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </div>
    );
};

export default Profile;
