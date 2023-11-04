"use client"
import SignUp from "@/components/authentication/SignUp";
import React from 'react'
import { isUserAuthenticated } from '@/services/auth'
import { redirect } from 'next/navigation';

const SignUpPage = () => {

    if (isUserAuthenticated()) {
        redirect('/challenges');
    }

    return (
        <div>
            <SignUp />
        </div>
    )
}

export default SignUpPage