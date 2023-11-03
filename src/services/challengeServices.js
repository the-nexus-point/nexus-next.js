import axios from "axios";
import { jwtDecode } from "jwt-decode";

const backendUrl = "http://localhost:5001";

export async function fetchChallengesData() {
  try {
    const response = await axios.get(`${backendUrl}/api/contests`);
    return response.data;
  } catch (error) {
    console.error("Error fetching challenges data:", error.message);
    return null;
  }
}
