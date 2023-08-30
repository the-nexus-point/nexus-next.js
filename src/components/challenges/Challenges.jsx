import React from "react";
import Challenge from "./Challenge";
import { FaHackerrank } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

const Challenges = () => {
  const challenges = [
    {
      id: 1,
      logo: <SiCodechef className="text-6xl" />,
      name: "Codechef Biweekly",
      detail: `Students require to register within the codechef contest which is held on wednesday of every week Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book
        It has survived not only five centuries but also the leap into electronic
        typesetting remaining essentially unchanged It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages`,
      participants: 78,
    },
    {
      id: 2,
      logo: <FaHackerrank className="text-6xl" />,
      name: "Hackerrank Weekly",
      detail: "details here",
      participants: 56,
    },
    {
      id: 3,
      name: "Challenge 3",
      detail: "details here",
      participants: 8,
    },
  ];

  return (
      <div className="p-2 flex flex-col space-y-5">
        {challenges.map((challenge) => (
          <Challenge key={challenge.id} challenge={challenge} />
        ))}
      </div>
  );
};

export default Challenges;
