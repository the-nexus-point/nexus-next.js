"use client";
import { Box, Flex, Image, Tag } from '@chakra-ui/react';
import React from 'react';
import { AiFillTrophy } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

function Profile() {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token'); // Get the token from local storage
        // console.log(token);
        const secret = 'thisisasecret';
        try {
            const decodedToken = jwt.verify(token, 'thisisasecret');
            if (!decodedToken || !decodedToken.userId) {
                // Handle the case where the user's ID is not available in the token
                return;
            }
            console.log(decodedToken);
        } catch (error) {
            console.error('Error decoding JWT:', error);
        }
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
                                <Tag> username </Tag>
                                <Tag> email </Tag>
                                <Tag> libId </Tag>
                                <Tag> Branch </Tag>
                            </div>
                            <div className='w-full flex mx-1'>
                                <Tag>bio of the user </Tag>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center px-3 py-4'>
                            <Tag> hackerrankId </Tag>
                            <Tag> codechefId </Tag>
                            <Tag> codeforcesId </Tag>
                            <Tag> leetcodeId </Tag>
                            <Tag> githubId </Tag>
                        </div>
                    </Box>
                </Flex>
            </div>
        </>
    )
}

export default Profile
