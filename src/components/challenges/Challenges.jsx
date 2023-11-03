import React, { useEffect, useState } from "react";
import Challenge from "./Challenge";
import { FaHackerrank } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { fetchChallengesData } from "@/services/challengeServices";

const Challenges = () => {
  const challenges = [
    {
      logo: <SiCodechef className="text-6xl" />,
    },
    {
      logo: <FaHackerrank className="text-6xl" />,
    },
  ];

  const [challengesData, setChallengesData] = useState([]);

  useEffect(() => {
    fetchChallengesData().then((data) => {
      if (data) {
        setChallengesData(data);
      }
    });
  }, []);

  return (
    <div className="p-2 flex flex-col space-y-5">
      {challengesData.map((challenge) => (
        <Challenge key={challenge._id} challenge={challenge} />
      ))}
    </div>
  );
};

export default Challenges;
