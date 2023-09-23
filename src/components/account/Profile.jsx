"use client";
import { Box, Flex, Image, Tag, Text } from '@chakra-ui/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React from 'react';
import { AiFillTrophy, AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineUser } from 'react-icons/ai';

function Profile() {
    const { data: session } = useSession();
    const userName = session?.user?.name;
    const Avatar = session?.user?.image;
    const email = session?.user?.email;
    return (
        <>
            <div>
                <Flex className='md:flex-row flex-col' color='white'>
                    <Box flex='1' size='150px'>
                        <div className='flex justify-center m-4 p-2'>
                            <Image
                                borderRadius='full'
                                boxSize='150px'
                                src={Avatar}
                                alt={userName?.charAt(0)}
                            />
                            <div className='mx-3 justify-center items-center flex flex-col space-y-3'>
                                <Tag><AiOutlineArrowDown className="w-4 h-4" />324</Tag>
                                <Tag> <AiOutlineArrowUp className="w-4 h-4" /> 23</Tag>
                                <Tag> <AiFillTrophy className="w-4 h-4" /> 4 </Tag>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Text className='px-3 m-1'>{userName}</Text>
                            <Text className='px-3 m-1'>{email}</Text>
                            <Text className='px-3 m-1'>
                                bio of the user bio of the user bio of the user bio of the user. bio of the user bio of the user bio of the user bio of the user. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            </Text>
                        </div>
                    </Box>
                    <Box flex='2' bg='tomato'>
                        <Text>Box 3</Text>
                    </Box>
                </Flex>
            </div>
            <Tabs className='mt-5 pt-5' isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </>
    )
}

export default Profile
