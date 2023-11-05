"use client"
import React, { useEffect, useState } from "react";
import Announcement from "./Announcement";
import { fetchAnnouncementsData } from "@/services/announcementServices";
import axios from "axios";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncementsData().then((data) => {
      if (data) {
        setAnnouncements(data);
      }
    });
  }, []);

  return (
    <div className="p-2 flex flex-col space-y-5">
      {announcements.map((announcement) => (
        <Announcement
          key={announcement._id}
          announcement={announcement}
        />
      ))}
    </div>
  );
};

export default Announcements;
