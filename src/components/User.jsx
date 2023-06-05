import React from "react";
import { FaUserCircle } from "react-icons/fa";
import UserContainer from "./shared/UserContainer";

const Profile = () => {
  const user = {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    bio: "Software Developer | Tech Enthusiast",
    location: "New York, USA",
    website: "https://www.example.com",
    upvotes: 100,
    downvotes: 100,
    department: "CSAI",
    challengeRanking: 5,
    tags: ["JavaScript", "React", "Node.js"],
  };

  return (
    <UserContainer>
      <div className="w-3/4 flex flex-col overflow-y-auto">
        <div className="flex border-b border-gray-700">
          <div className="w-1/2 flex justify-between p-2 bg-black">
            <div className="flex flex-col">
              <FaUserCircle className="text-5xl hover:text-black hover:opacity-75" />
              <h2 className="text-xl font-semibold">{user.username}</h2>
              <p>Total Upvotes: {user.upvotes}</p>
            </div>
          </div>
          <div className="w-1/2 flex justify-between p-2 bg-gray">
            <div className="mx-8">
              <h2 className="text-lg font-semibold">{user.department}</h2>
              <p>Challenge Ranking: {user.challengeRanking}</p>
              <div className="flex space-x-2">
                {user.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-300 text-gray-800 rounded px-2 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black p-20">
          <h1 className="p-20">hello</h1>
          <h1 className="p-20">hello</h1>
          <h1 className="p-20">hello</h1>
        </div>
      </div>
    </UserContainer>
  );
};

export default Profile;
