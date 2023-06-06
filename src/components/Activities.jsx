import React from "react";
import UserContainer from "./shared/UserContainer";

const Activities = () => {
  const activities = [
    {
      id: 1,
      type: "post",
      content: "Posted a new project.",
      date: "2023-05-27",
    },
    {
      id: 2,
      type: "comment",
      content: "Commented on a project.",
      date: "2023-05-26",
    },
    {
      id: 3,
      type: "like",
      content: "Liked a post.",
      date: "2023-05-25",
    },
    // Add more activities as needed
  ];

  return (
    <UserContainer activeRoute="activities">
      <div className="w-3/4 flex flex-col overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-4">Activities</h1>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id}>
              <p>{activity.content}</p>
              <p className="text-gray-500 text-sm">{activity.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </UserContainer>
  );
};

export default Activities;
