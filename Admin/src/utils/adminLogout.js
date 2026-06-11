export async function adminLogout() {
  try {
    // Backend logout route clears httpOnly cookie.
    await fetch("https://kct-leave-management-system-backend.onrender.com/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
  } catch {
    // ignore
  } finally {
    localStorage.removeItem("token");
  }
}

