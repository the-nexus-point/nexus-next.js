"use client"
import React from 'react'
import Announcement from '@/components/announcement/Announcement'
import { isUserAuthenticated } from '@/services/auth'
import { redirect } from 'next/navigation';



const AnnouncementPage = () => {

    if (!isUserAuthenticated()) {
        redirect('/signup');
    }

    return (
        <div>
            <Announcement />
        </div>
    );
};

export default AnnouncementPage
