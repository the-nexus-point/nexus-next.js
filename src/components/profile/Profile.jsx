"use client";
import { Avatar, Badge, Box, Flex, Image, Tag, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { GiPodiumSecond, GiPodiumWinner, GiPodiumThird } from 'react-icons/gi';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { fetchUserData } from '@/services/userServices';

function Profile() {
    const toast = useToast();
    const backendUrl = process.env.BACKEND_URI || "http://localhost:5001";
    const apiKey = process.env.API_KEY;
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

    const showToast = (status, description) => {
        toast({
            title: status,
            description: description,
            status,
            duration: 3000,
            isClosable: true,
        });
    };

    const handleUpdateCodechefId = async () => {
        try {
            const response = await axios.put(`${backendUrl}/api/users/${userData._id}`, {
                codechefId: updatedCodechefId,
            }, {
                headers: {
                    "Authorization": `Bearer ${apiKey}`
                }
            });

            if (response.status === 200) {
                showToast('success', 'Codechef ID updated successfully');
            }
        } catch (error) {
            console.error('Error updating Codechef ID', error);
            showToast('error', 'Error updating Codechef ID');
        }
        updateCodechefProfile();
    }

    const updateCodechefProfile = async () => {
        try {
            const response = await axios.put(`${backendUrl}/api/contests/codechef/${userData._id}`, {
                codechefId: updatedCodechefId,
            }, {
                headers: {
                    "Authorization": `Bearer ${apiKey}`
                }
            });

            if (response.status === 200) {
                showToast('success', 'Codechef Profile updated successfully');
            }
        } catch (error) {
            console.error('Error updating Codechef Profile', error);
            showToast('error', 'Error updating Codechef Profile');
        }
    }

    const handleUpdateCodeforcesId = async () => {
        try {
            const response = await axios.put(`${backendUrl}/api/users/${userData._id}`, {
                codeforcesId: updatedCodeforcesId,
            }, {
                headers: {
                    "Authorization": `Bearer ${apiKey}`
                }
            });

            if (response.status === 200) {
                showToast('success', 'Codeforces ID updated successfully');
            } else {
                console.error('Codeforces ID update failed with status:', response.status);
                showToast('error', 'Codeforces ID update failed');
            }
        } catch (error) {
            console.error('Error updating Codeforces ID:', error);
            showToast('error', 'Error updating Codeforces ID');
        }
    };

    const handleUpdateLeetcodeId = async () => {
        try {
            const response = await axios.put(`${backendUrl}/api/users/${userData._id}`, {
                leetcodeId: updatedLeetcodeId,
            }, {
                headers: {
                    "Authorization": `Bearer ${apiKey}`
                }
            });

            if (response.status === 200) {
                showToast('success', 'Leetcode ID updated successfully');
            }
        } catch (error) {
            console.error('Error updating Leetcode ID', error);
            showToast('error', 'Error updating Leetcode ID');
        }
    }

    const handleUpdateGithubId = async () => {
        try {
            const response = await axios.put(`${backendUrl}/api/users/${userData._id}`, {
                githubId: updatedGithubId,
            }, {
                headers: {
                    "Authorization": `Bearer ${apiKey}`
                }
            });

            if (response.status === 200) {
                showToast('success', 'Github ID updated successfully');
            }
        }
        catch (error) {
            console.error('Error updating Github ID', error);
            showToast('error', 'Error updating Github ID');
        }
    }


    const handleUpdateBio = async () => {
        try {
            const response = await axios.put(`${backendUrl}/api/users/${userData._id}`, {
                bio: updatedBio,
            }, {
                headers: {
                    "Authorization": `Bearer ${apiKey}`
                }
            });

            if (response.status === 200) {
                showToast('success', 'Bio updated successfully');
                setIsEditingBio(false);
                setUserData({ ...userData, bio: updatedBio });
            }
        }
        catch (error) {
            console.error('Error updating Bio', error);
            showToast('error', 'Error updating Bio');
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
                                as={Avatar}
                                src={userData.userImg}
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mx-3 justify-center items-center flex space-x-4'>
                                <Tag> <GiPodiumSecond className="w-5 h-5" /> 4 </Tag>
                                <Tag> <GiPodiumWinner className="w-8 h-8" /> 4 </Tag>
                                <Tag> <GiPodiumThird className="w-5 h-5" /> 4 </Tag>
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
                                    <div className='flex flex-col'>
                                        <Tag fontWeight='bold' colorScheme='gray' className='w-fit mx-2 my-2'> Bio </Tag>
                                        <Tag fontWeight='bold' colorScheme=''>
                                            {userData.bio}
                                        </Tag>
                                        <Tag fontWeight='bold' colorScheme='gray' className='w-fit cursor-pointer mx-2 my-2' onClick={() => setIsEditingBio(true)}>
                                            <AiFillEdit className="w-4 h-4" />
                                        </Tag>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center px-3 py-4'>
                            <div className='font-bold flex flex-col justify-center items-center'>
                                <Badge colorScheme='yellow' className='w-fit'>
                                    codechef
                                </Badge>
                                {userData.codechefId ? (
                                    <div>
                                        {userData.codechefId}
                                    </div>
                                ) : (
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
                                            type="button"
                                            onClick={() => {
                                                handleUpdateCodechefId();
                                                updateCodechefProfile();
                                            }}
                                        >
                                            Update
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className='font-bold flex flex-col justify-center items-center'>
                                <Badge colorScheme='yellow' className='w-fit'>
                                    codeforces
                                </Badge>
                                {userData.codeforcesId ? (
                                    <div>
                                        {userData.codeforcesId}
                                    </div>
                                ) : (
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
                                            type="button"
                                            onClick={handleUpdateCodeforcesId}
                                        >
                                            Update
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className='font-bold flex flex-col justify-center items-center'>
                                <Badge colorScheme='yellow' className='w-fit'>
                                    Leetcode
                                </Badge>
                                {userData.leetcodeId ? (
                                    <div>
                                        {userData.leetcodeId}
                                    </div>
                                ) : (
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
                                            type="button"
                                            onClick={handleUpdateLeetcodeId}
                                        >
                                            Update
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className='font-bold flex flex-col justify-center items-center'>
                                <Badge colorScheme='yellow' className='w-fit'>
                                    Github
                                </Badge>
                                {userData.githubId ? (
                                    <div>
                                        {userData.githubId}
                                    </div>
                                ) : (
                                    <div className='flex flex-col justify-center items-center'>
                                        <input
                                            className="w-1/2 mt-1 shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded leading-tight focus:outline-none focus:shadow-outline"
                                            name="text"
                                            type="text"
                                            value={updatedGithubId}
                                            onChange={(e) => setUpdatedGithubId(e.target.value)}
                                        />
                                        <button
                                            className="w-1/3 mt-1 py-1 bg-purple-500 hover:bg-purple-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                                            type="button"
                                            onClick={handleUpdateGithubId}
                                        >
                                            Update
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Box>
                </Flex>
            </div>
        </>
    )
}

export default Profile
