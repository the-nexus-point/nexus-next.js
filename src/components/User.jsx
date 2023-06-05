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
    department: "CSAI",
    challengeRanking: 5,
    tags: ["JavaScript", "React", "Node.js"],
  };

  return (
    <UserContainer>
      
    </UserContainer>
  );
};

export default Profile;
