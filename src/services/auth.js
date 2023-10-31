
export function isUserAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token; // Return true if the token exists, false if it doesn't
  }
  