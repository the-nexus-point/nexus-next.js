import React from "react";
import Container from "./shared/Container";
import { MdGroups2 } from "react-icons/md";
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
    <Container activeRoute="challenges">
      <div className="p-2">
        <div className="grid gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="border rounded p-4 flex justify-between items-center"
            >
              <div className="flex flex-col space-y-3">
                {challenge.logo}
                <h2 className="text-lg font-semibold">{challenge.name}</h2>
                <p>{challenge.detail}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <MdGroups2 className="text-3xl text-gray-400" />
                  <span className="text-gray-400">
                    {challenge.participants}
                  </span>
                </div>
              </div>
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Challenges;
