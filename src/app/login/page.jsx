"use client"
import React from 'react'
import Login from '@/components/authentication/Login'
import { isUserAuthenticated } from '@/services/auth'
import { redirect } from 'next/navigation';

const LoginPage = () => {

    // if (isUserAuthenticated()) {
    //     redirect('/challenges');
    // }

    return (
        <div>
            <Login />
        </div>
    )
}

export default LoginPage
