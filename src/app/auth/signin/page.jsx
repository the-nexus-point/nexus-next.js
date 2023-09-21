"use client"
import { signIn } from "next-auth/react";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";



const SignIn = () => {
    const { data: session } = useSession();
    const router = useRouter();
    try {
        if (session) {
            router.replace('/');
        }
    } catch (error) {
        console.log(error);

    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h3 className="text-center mb-5">Sign In with College Id</h3>
            <hr />
            <button className="flex items-center border border-gray-700 hover:border-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => signIn("google")}
            >
                <FcGoogle className="mx-2" />
                Sign in with google
            </button>
        </div>
    );
};

export default SignIn;
