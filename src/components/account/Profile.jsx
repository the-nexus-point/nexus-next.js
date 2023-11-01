"use client";
import { Badge, Box, Flex, Image, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillTrophy } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { fetchUserData } from '@/services/userServices'

function Profile() {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetchUserData().then(data => {
            if (data) {
                setUserData(data);
            }
        });
    }, []);

    return (
        <>
            <div>
                <Flex className='md:flex-row flex-col' color='white'>
                    <Box flex='1' size='150px'>
                        <div className='flex justify-center m-4 p-2'>
                            <Image
                                borderRadius='full'
                                boxSize='150px'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mx-3 justify-center items-center flex flex-col space-y-3'>
                                <Tag> <AiFillTrophy className="w-4 h-4" /> 4 </Tag>
                            </div>
                        </div>
                    </Box>
                    <Box flex='2' className='flex space-y-3 flex-col justify-center items-start'>
                        <div className='flex justify-between px-3 py-4'>
                            <div className='flex flex-col justify-between space-y-3 mx-1'>
                                <Tag fontWeight='bold' colorScheme='gray'> {userData.username} </Tag>
                                <Tag fontWeight='bold' colorScheme='gray'> {userData.email} </Tag>
                                <Tag fontWeight='bold' colorScheme='gray'> {userData.libId} </Tag>
                                <Tag fontWeight='bold' colorScheme='gray'> {userData.branch} </Tag>
                            </div>
                            <div className='w-full flex mx-1'>
                                <Tag fontWeight='bold' colorScheme=''>{userData.bio} </Tag>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center px-3 py-4'>
                            <Text fontWeight='bold'>
                                <Badge colorScheme='yellow'>
                                    codechef
                                </Badge>
                                <p>
                                    {userData.codechefId}
                                </p>
                            </Text>
                            <Text fontWeight='bold'>
                                <Badge colorScheme='yellow'>
                                    codeforces
                                </Badge>
                                <p>
                                    {userData.codeforcesId}
                                </p>
                            </Text>
                            <Text fontWeight='bold'>
                                <Badge colorScheme='yellow'>
                                    leetcode
                                </Badge>
                                <p>
                                    {userData.leetcodeId}
                                </p>
                            </Text>
                            <Text fontWeight='bold'>
                                <Badge colorScheme='yellow'>
                                    github
                                </Badge>
                                <p>
                                    {userData.githubId}
                                </p>
                            </Text>
                        </div>
                    </Box>
                </Flex>
            </div>
        </>
    )
}

export default Profile
