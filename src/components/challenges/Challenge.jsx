"use client"
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { SiCodechef } from "react-icons/si";

const Challenge = ({ challenge }) => {

  const updatedAt = new Date(challenge.updatedAt);
  const formattedDate = `${updatedAt.toLocaleDateString()} ${updatedAt.toLocaleTimeString()}`;

  return (
    <div className="border border-zinc-700 rounded-xl p-5 bg-zinc-900/10 hover:bg-zinc-800/20 hover:cursor-pointer flex justify-between items-center space-x-5">
      <div className="flex flex-col space-y-3">
        {challenge.name === "CodeChef" ? (
          <SiCodechef className="text-6xl" />
        ) : challenge.name === "HackerRank" ? (
          <FaHackerrank className="text-6xl" />
        ) : (
          <div>Default Logo</div>
        )}
        <h2 className="text-lg font-semibold">{challenge.name}</h2>
        <p>{challenge.description}</p>
        <div className="flex items-center space-x-2 mt-2">
          <MdGroups2 className="text-3xl text-gray-400" />
          <span className="text-gray-400">{challenge.totalParticipant}</span>
          <AiOutlineCalendar className="text-3xl text-gray-400" />
          <span className="text-gray-400">{formattedDate}</span>
        </div>
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded">
        Enroll
      </button>
    </div>
  );
};

export default Challenge;
