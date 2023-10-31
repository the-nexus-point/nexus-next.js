"use client"
import Challenges from "@/components/challenges/Challenges";
import { isUserAuthenticated } from "@/services/auth";

const ChallengesPage = () => {

  if (!isUserAuthenticated()) {
    window.location.href = "/signup";
  }
  return (
    <div>
      <Challenges />
    </div>
  );
};

export default ChallengesPage;
