import axios from "axios";

const backendUrl = process.env.BACKEND_URI;
const apiKey = process.env.API_KEY;

export async function fetchAnnouncementsData() {
  try {
    const response = await axios.get(`${backendUrl}/api/announcements`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching announcements data:", error.message);
    return null;
  }
}
