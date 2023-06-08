import React from "react";
import UserContainer from "./shared/UserContainer";
import Post from "./shared/Post";

const Activities = () => {
  const activities = [
    {
      id: 1,
      username: "harsh.2125csai1044",
      content: "Posted a new project.",
      date: "2023-05-27",
    },
    {
      id: 2,
      username: "harsh.2125csai1044",
      content: "Commented on a project.",
      date: "2023-05-26",
    },
    {
      id: 3,
      username: "harsh.2125csai1044",
      content: "Liked a post.",
      date: "2023-05-25",
    },
    // Add more activities as needed
  ];

  return (
    <UserContainer activeRoute="activities">
      <div className="w-full flex flex-col overflow-y-auto p-2 space-y-1">
          {activities.map((activity) => (
            <Post
              key={activity.id}
              username={activity.username}
              content={activity.content}
            />
          ))}
      </div>
    </UserContainer>
  );
};

export default Activities;
