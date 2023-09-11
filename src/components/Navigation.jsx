import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useAuth0 } from "@auth0/auth0-react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; // Import Remix Icons

const Navigation = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated, "user: ", user);
  }, [isAuthenticated]);

  if (isLoading) {
    // Handle loading state, e.g., show a loading spinner
    return <div>Loading...</div>;
  }

  // Determine whether to display the menu icon based on screen width
  const displayMenuIcon = window.innerWidth <= 767;

  return (
    <header className="main-header">
      <nav>
        <div className="header-content">
          {user ? (
            <Link to={"/"}>
              <a href="#" aria-label="Home" className="nav-link">
                {`Hi, ${user.name.slice(0, user.name.indexOf("@"))}`}{" "}
              </a>
            </Link>
          ) : (
            <Link to={"/"}>
              <a href="#" aria-label="Home" className="nav-link">
                Home
              </a>
            </Link>
          )}

          {isAuthenticated ? (
            <Link to={"/wallpaper"}>
              <a href="#" aria-label="Wallpaper" className="nav-link">
                Wallpaper
              </a>
            </Link>
          ) : (
            <Link to={"/"}>
              <a href="#" aria-label="Wallpaper" className="nav-link">
                Wallpaper
              </a>
            </Link>
          )}

          {isAuthenticated ? (
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              aria-label="Log Out"
              className="auth-button"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              aria-label="Log In"
              className="auth-button"
            >
              Log In
            </button>
          )}
        </div>
        {/* Conditionally render the menu icon */}
        {displayMenuIcon && (
          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            id="menu-icon"
            onClick={toggleMenu}
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </div>
        )}

        {/* Mobile Menu */}
        <div
          onClick={toggleMenu}
          className={`mobile-background-blur ${menuOpen ? "open" : ""}`}
        >
          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <div className="mobile-profile-container">
              <div className="user-profile">
                {/* Add an image source for the user profile */}
                <img
                  src={
                    user && user.picture && user.picture
                      ? user.picture
                      : "../assets/react.svg"
                  }
                  alt="User Profile"
                />
              </div>
              <h1>{`Hi, ${
                user ? user.name.slice(0, user.name.indexOf("@")) : "Guest"
              }`}</h1>
            </div>
            <div className="mobile-menu-container">
              <div className="mobile-menu-options">
                <a href="#">About</a>
                <Link to={"/wallpaper"}>
                  {" "}
                  <a href="#">Wallpapers</a>
                </Link>

                {isAuthenticated ? (
                  <div
                    onClick={() => logout({ returnTo: window.location.origin })}
                    aria-label="Log Out"
                    className="auth-button-mobile"
                  >
                    Log Out
                  </div>
                ) : (
                  <div
                    onClick={() => loginWithRedirect()}
                    aria-label="Log In"
                    className="auth-button-mobile"
                  >
                    Log In
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
