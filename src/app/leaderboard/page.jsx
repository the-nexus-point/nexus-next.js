import React from 'react'
import Leaderboard from '@/components/leaderboard/Leaderboard'
import { isUserAuthenticated } from '@/services/auth'
import { redirect } from 'next/navigation';

const LeaderboardPage = () => {

    if (!isUserAuthenticated()) {
        redirect('/signup');
    }
    
    return (
        <div>
            <Leaderboard />
        </div>
    )
}

export default LeaderboardPage
