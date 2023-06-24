import React from "react";
import { FaUserCircle } from "react-icons/fa";
import UserContainer from "./shared/UserContainer";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiFillFlag,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const Profile = () => {
  const user = {
    name: "Harsh Keshari",
    username: "harsh.2125csai1066",
    email: "harsh.2125csai1066@kiet.edu",
    bio: "Software Developer | Tech Enthusiast.",
    location: "India",
    website: "harsh-keshari.vercel.app",
    upvotes: 100,
    downvotes: 10,
    department: "CSAI",
    challengeRanking: 5,
    tags: [
      "C++",
      "C",
      "Html",
      "Css",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  };

  return (
    <UserContainer activeRoute="profile">
      <div className="w-full flex flex-col overflow-y-auto items-center">
        <div className="w-full flex justify-between min-[320px]:max-xl:flex-col border-b border-gray-700 py-10 space-y-5">
          <div className="w-full min-[320px]:max-xl:w-full flex flex-col justify-center items-center space-y-2">
            <FaUserCircle className="text-8xl hover:text-black hover:opacity-75 cursor-pointer" />
            <div className="flex flex-col items-center mb-4 space-x-2">
              <h2 className="text-lg font-semibold">{user.username}</h2>
              <div className="px-5 py-2 text-sm">{user.bio}</div>
            </div>
            <div className="flex items-center mt-2 space-x-2">
              <button className="flex items-center rounded bg-neutral-900/25 hover:bg-neutral-900/40 text-white font-bold py-1 px-2 space-x-1">
                <span>{user.upvotes}</span>
                <AiOutlineArrowUp className="w-4 h-4" />
              </button>
              <button className="flex items-center rounded bg-neutral-900/25 hover:bg-neutral-900/40 text-white font-bold py-1 px-2 space-x-1">
                <span>{user.downvotes}</span>
                <AiOutlineArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="w-full min-[320px]:max-xl:w-full flex flex-col justify-center items-center space-y-2">
            <h2 className="text-xl font-semibold">{user.department}</h2>
            <div className="flex items-center justify-center space-x-1">
              <AiFillFlag className="w-5 h-5" />
              <p className="text-sm">
                Challenge Score: {user.challengeRanking}
              </p>
            </div>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://instagram.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="w-6 h-6 text-black hover:text-white" />
              </a>
              <a
                href="https://twitter.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter className="w-6 h-6 text-blue-500 hover:text-blue-700" />
              </a>
              <a
                href="https://linkedin.com/in/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="w-6 h-6 text-blue-500 hover:text-blue-700" />
              </a>
              <a
                href="https://github.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="w-6 h-6 text-black hover:text-white" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2 p-2">
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
        <div></div>
      </div>
    </UserContainer>
  );
};

export default Profile;
