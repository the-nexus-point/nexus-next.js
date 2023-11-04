export function isUserAuthenticated() {
  // if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return !!token;
  // }
  // return true; // Fallback if running in a non-browser environment
}
