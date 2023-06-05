import React from "react";
import { MdGroups2 } from "react-icons/md";

const Challenge = ({ challenge }) => {
  return (
    <div className="border border-neutral-700 rounded p-5 bg-neutral-900/10 hover:bg-neutral-900/20 hover:cursor-pointer flex justify-between items-center space-x-5">
      <div className="flex flex-col space-y-3">
        {challenge.logo}
        <h2 className="text-lg font-semibold">{challenge.name}</h2>
        <p>{challenge.detail}</p>
        <div className="flex items-center space-x-2 mt-2">
          <MdGroups2 className="text-3xl text-gray-400" />
          <span className="text-gray-400">{challenge.participants}</span>
        </div>
      </div>
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded">
        Register
      </button>
    </div>
  );
};

export default Challenge;
