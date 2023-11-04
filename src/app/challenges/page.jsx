"use client"
import Challenges from "@/components/challenges/Challenges";
import { isUserAuthenticated } from "@/services/auth";
import { redirect } from 'next/navigation';

const ChallengesPage = () => {

  if (!isUserAuthenticated()) {
    redirect('/signup');
  }

  return (
    <div>
      <Challenges />
    </div>
  );
};

export default ChallengesPage;
