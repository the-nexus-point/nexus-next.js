"use client"
import React from 'react'
import { isUserAuthenticated } from '@/services/auth'
import { redirect } from 'next/navigation';
import Announcements from '@/components/announcement/Annuncements';



const AnnouncementPage = () => {

    if (!isUserAuthenticated()) {
        redirect('/signup');
    }

    return (
        <div>
            <Announcements />
        </div>
    );
};

export default AnnouncementPage
