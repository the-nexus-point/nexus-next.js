"use client";
import { Box, Flex, Image, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillTrophy } from 'react-icons/ai';

function Profile() {
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
                    <Box flex='2'>
                        <div className='flex space-y-3 flex-col justify-center items-start'>
                            <Tag>bio of the user bio of the user bio of the user bio of the user. bio of the user bio of the user bio of the user bio of the user. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Tag>
                            <Tag> username </Tag>
                            <Tag> email </Tag>
                            <Tag> Library Id </Tag>
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
