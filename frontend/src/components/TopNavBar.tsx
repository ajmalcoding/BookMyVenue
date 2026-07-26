import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TopNavBar({
  activePage = "home",
}: {
  activePage?: "home" | "listings";
}) {
  const navigate = useNavigate();

  // Check if user is logged in
  const token = localStorage.getItem("access");

  const handleLogout = () => {
    // Clear JWT tokens
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    // If you store any other user data, clear it too
    sessionStorage.clear();

    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="bg-surface/80 dark:bg-surface/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-glass-stroke shadow-sm transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="text-headline-md font-headline-md font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer">
          <Link to="/">BookMyVenue</Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            className={`${
              activePage === "home"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
            to="/"
          >
            Explore
          </Link>

          <Link
            className="text-on-surface-variant hover:text-primary"
            to="#"
          >
            Host
          </Link>

          <Link
            className={`${
              activePage === "listings"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
            to="/venues"
          >
            Listings
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Login / Logout */}
          {token ? (
            <button
              onClick={handleLogout}
              className="hidden md:block px-6 py-2 bg-red-500 text-white rounded-btn font-label-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              className="hidden md:block px-6 py-2 bg-primary text-on-primary rounded-btn font-label-md hover:shadow-ambient hover:opacity-90 transition-all"
              to="/login"
            >
              Sign In
            </Link>
          )}

          {/* Profile Icon */}
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container"
            to="/user-dashboard"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              account_circle
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}