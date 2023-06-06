import React from "react";
import UserContainer from "./shared/UserContainer";
import { BsFillEmojiDizzyFill } from "react-icons/bs";

const EditProfile = () => {
  return (
    <UserContainer activeRoute="edit">
      <div className="flex items-center justify-center p-5 space-x-5">
        <BsFillEmojiDizzyFill className="w-10 h-10" />
        <h1 className="text-4xl font-bold">
          This feature will be available soon...
        </h1>
      </div>
    </UserContainer>
  );
};

export default EditProfile;
