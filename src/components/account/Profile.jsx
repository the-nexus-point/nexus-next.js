"use client";
import { Badge, Box, Flex, Image, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillTrophy, AiFillEdit } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { fetchUserData } from '@/services/userServices'
import axios from 'axios';


function Profile() {

    const backendUrl = 'http://localhost:5001';

    const [userData, setUserData] = useState({});
    const [updatedCodeforcesId, setUpdatedCodeforcesId] = useState('');
    const [updatedCodechefId, setUpdatedCodechefId] = useState('');
    const [updatedLeetcodeId, setUpdatedLeetcodeId] = useState('');
    const [updatedGithubId, setUpdatedGithubId] = useState('');
    const [updatedBio, setUpdatedBio] = useState('');
    const [isEditingBio, setIsEditingBio] = useState(false);



    useEffect(() => {
        fetchUserData().then(data => {
            if (data) {
                setUserData(data);
            }
        });
    }, []);

    const handleUpdateCodeforcesId = async () => {
        try {
            const response = await axios.put(`${backendUrl}/api/users/${userData._id}`, {
                codeforcesId: updatedCodeforcesId,
            });

            if (response.status === 200) {
                console.log('Codeforces ID updated successfully');
            }
        } catch (error) {
            console.error('Error updating Codeforces ID', error);
        }
    };

    const handleUpdateCodechefId = async () => {
        try {
            const response = await axios.put(`${backendUrl}/api/users/${userData._id}`, {
                codechefId: updatedCodechefId,
            });

            if (response.status === 200) {
                console.log('Codechef ID updated successfully');
            }
        } catch (error) {
            console.error('Error updating Codechef ID', error);
        }
    }

    const handleUpdateLeetcodeId = async () => {
        try {
            const response = await axios.put(`${backendUrl}/api/users/${userData._id}`, {
                leetcodeId: updatedLeetcodeId,
            });

            if (response.status === 200) {
                console.log('Leetcode ID updated successfully');
            }
        } catch (error) {
            console.error('Error updating Leetcode ID', error);
        }
    }

    const handleUpdateGithubId = async () => {
        try {
            const response = await axios.put(`${backendUrl}/api/users/${userData._id}`, {
                githubId: updatedGithubId,
            });

            if (response.status === 200) {
                console.log('Github ID updated successfully');
            }
        } catch (error) {
            console.error('Error updating Github ID', error);
        }
    }

    const handleUpdateBio = async () => {
        try {
            const response = await axios.put(`${backendUrl}/api/users/${userData._id}`, {
                bio: updatedBio,
            });

            if (response.status === 200) {
                console.log('Bio updated successfully');
                setIsEditingBio(false);
                setUserData({ ...userData, bio: updatedBio });
            }
        } catch (error) {
            console.error('Error updating Bio', error);
        }
    }

    return (
        <>
            <div>
                <Flex className='md:flex-row flex-col' color='white'>
                    <Box flex='1' size='150px'>
                        <div className='flex justify-center m-4 p-2'>
                            <Image
                                borderRadius='full'
                                boxSize='150px'
                                src={userData.userImg}
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mx-3 justify-center items-center flex flex-col space-y-3'>
                                <Tag> <AiFillTrophy className="w-4 h-4" /> 4 </Tag>
                            </div>
                        </div>
                    </Box>
                    <Box flex='2' className='flex space-y-3 flex-col justify-center items-start'>
                        <div className='w-full flex justify-between px-3 py-4'>
                            <div className='flex flex-col justify-between space-y-3 mx-1'>
                                <Tag fontWeight='bold' colorScheme='gray'> {userData.username} </Tag>
                                <Tag fontWeight='bold' colorScheme='gray'> {userData.email} </Tag>
                                <Tag fontWeight='bold' colorScheme='gray'> {userData.libId} </Tag>
                                <Tag fontWeight='bold' colorScheme='gray'> {userData.branch} </Tag>
                            </div>
                            <div className='w-full flex flex-col items-center mx-1'>
                                {isEditingBio ? (
                                    <div className='w-full flex flex-col justify-center items-center'>
                                        <input
                                            className="w-full h-28 mt-1 shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded leading-tight focus:outline-none focus:shadow-outline"
                                            name="text"
                                            type="text"
                                            value={updatedBio}
                                            onChange={(e) => setUpdatedBio(e.target.value)}
                                        />
                                        <button
                                            className="w-1/4 mt-1 py-1 bg-purple-500 hover:bg-purple-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                                            type="button"
                                            onClick={handleUpdateBio}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="w-1/4 mt-1 py-1 bg-red-500 hover:bg-red-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                                            type="button"
                                            onClick={() => {
                                                setIsEditingBio(false);
                                                setUpdatedBio(userData.bio); // Reset the edited text
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <Tag fontWeight='bold' colorScheme=''>
                                            {userData.bio}
                                        </Tag>
                                        <Tag fontWeight='bold' colorScheme='gray' className='cursor-pointer' onClick={() => setIsEditingBio(true)}>
                                            <AiFillEdit className="w-4 h-4" />
                                        </Tag>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center px-3 py-4'>
                            <Text fontWeight='bold' className='flex flex-col justify-center items-center'>
                                <Badge colorScheme='yellow' className='w-fit'>
                                    codechef
                                </Badge>
                                {userData.codechefId ? (
                                    <p>
                                        {userData.codechefId}
                                    </p>
                                ) : (
                                    <form>
                                        <div className='flex flex-col justify-center items-center'>
                                            <input
                                                className="w-1/2 mt-1 shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded leading-tight focus:outline-none focus:shadow-outline"
                                                name="text"
                                                type="text"
                                                value={updatedCodechefId}
                                                onChange={(e) => setUpdatedCodechefId(e.target.value)}
                                            />
                                            <button
                                                className="w-1/3 mt-1 py-1 bg-purple-500 hover:bg-purple-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                                                type="submit"
                                                onClick={handleUpdateCodechefId}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </Text>
                            <Text fontWeight='bold' className='flex flex-col justify-center items-center'>
                                <Badge colorScheme='yellow' className='w-fit'>
                                    codeforces
                                </Badge>
                                {userData.codeforcesId ? (
                                    <p>
                                        {userData.codeforcesId}
                                    </p>
                                ) : (
                                    <form>
                                        <div className='flex flex-col justify-center items-center'>
                                            <input
                                                className="w-1/2 mt-1 shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded leading-tight focus:outline-none focus:shadow-outline"
                                                name="text"
                                                type="text"
                                                value={updatedCodeforcesId}
                                                onChange={(e) => setUpdatedCodeforcesId(e.target.value)}
                                            />
                                            <button
                                                className="w-1/3 mt-1 py-1 bg-purple-500 hover:bg-purple-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                                                type="submit"
                                                onClick={handleUpdateCodeforcesId}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </Text>
                            <Text fontWeight='bold' className='flex flex-col justify-center items-center'>
                                <Badge colorScheme='yellow' className='w-fit'>
                                    Leetcode
                                </Badge>
                                {userData.leetcodeId ? (
                                    <p>
                                        {userData.leetcodeId}
                                    </p>
                                ) : (
                                    <form>
                                        <div className='flex flex-col justify-center items-center'>
                                            <input
                                                className="w-1/2 mt-1 shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded leading-tight focus:outline-none focus:shadow-outline"
                                                name="text"
                                                type="text"
                                                value={updatedLeetcodeId}
                                                onChange={(e) => setUpdatedLeetcodeId(e.target.value)}
                                            />
                                            <button
                                                className="w-1/3 mt-1 py-1 bg-purple-500 hover:bg-purple-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                                                type="submit"
                                                onClick={handleUpdateLeetcodeId}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </Text>
                            <Text fontWeight='bold' className='flex flex-col justify-center items-center'>
                                <Badge colorScheme='yellow' className='w-fit'>
                                    Github
                                </Badge>
                                {userData.githubId ? (
                                    <p>
                                        {userData.githubId}
                                    </p>
                                ) : (
                                    <form>
                                        <div className='flex flex-col justify-center items-center'>
                                            <input
                                                className="w-1/2 mt-1 py-1 shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded leading-tight focus:outline-none focus:shadow-outline"
                                                name="text"
                                                type="text"
                                                value={updatedGithubId}
                                                onChange={(e) => setUpdatedGithubId(e.target.value)}
                                            />
                                            <button
                                                className="w-1/3 mt-1 py-1 bg-purple-500 hover:bg-purple-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                                                type="submit"
                                                onClick={handleUpdateGithubId}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </Text>
                        </div>
                    </Box>
                </Flex>
            </div>
        </>
    )
}

export default Profile
