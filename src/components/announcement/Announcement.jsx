"use client"
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FcHighPriority, FcLowPriority, FcMediumPriority } from "react-icons/fc";

const Announcement = ({ announcement }) => {

    const updatedAt = new Date(announcement.updatedAt);
    const formattedDate = `${updatedAt.toLocaleDateString()} ${updatedAt.toLocaleTimeString()}`;

    const priorityIcon =
        announcement.priority === "high"
            ? <FcHighPriority className="text-3xl text-gray-400" />
            : announcement.priority === "medium"
                ? <FcMediumPriority className="text-3xl text-gray-400" />
                : <FcLowPriority className="text-3xl text-gray-400" />;

    return (
        <div className="border border-zinc-700 rounded-xl p-5 bg-zinc-900/10 hover:bg-zinc-800/20 hover:cursor-pointer flex justify-between items-center space-x-5">
            <div className="flex flex-col space-y-3">
                {priorityIcon}
                <h2 className="text-lg font-semibold">{announcement.name}</h2>
                <p>{description}</p>
                <div className="flex items-center space-x-2 mt-2">
                    <AiOutlineCalendar className="text-3xl text-gray-400" />
                    <span className="text-gray-400">{formattedDate}</span>
                </div>
            </div>
        </div>
    )
};

export default Announcement;
