import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import Navigation from "../components/Navigation";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"; // Import Axios
import SearchContext from "../context/SearchContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  const [query, setQuery] = useState(""); // State for the search query
  const { searchData, setSearchData } = useContext(SearchContext);
  const [rateLimit, setRateLimit] = useState(null); // State for rate limit statistics

  const handleSearch = async () => {
    try {
      // Make a request to the Pexels API with your API key and the user's query
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=10`,
        {
          headers: {
            Authorization:
              "Bearer 7Vlbp8kYvE0Htdlte6Vkcp2LaNMLW3h40OT4wwUmJziNAplL6OBY1Dnq", // Replace with your actual API key
          },
        }
      );

      // Set the search results in state
      setSearchData(response.data.photos);

      // Get and set rate limit statistics from response headers
      const rateLimitLimit = response.headers["x-ratelimit-limit"];
      const rateLimitRemaining = response.headers["x-ratelimit-remaining"];
      const rateLimitReset = response.headers["x-ratelimit-reset"];

      setRateLimit({
        limit: rateLimitLimit,
        remaining: rateLimitRemaining,
        reset: rateLimitReset,
      });
    } catch (error) {
      console.error("Error searching for photos:", error);
    }
  };

  return (
    <div className="hero--section">
      <Navigation />
      <div className="center--container">
        <div className={`center--wrap ${isAuthenticated ? "nologin" : ""}`}>
          {isAuthenticated ? (
            <>
              <h1 className="h1-login">Pegasus Wallpapers</h1>
              <div className="search--container">
                <input
                  className="search--box"
                  type="text"
                  placeholder="Search for Photos"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Link to={"/search"}>
                  <button className="search--button" onClick={handleSearch}>
                    Search
                  </button>
                </Link>
              </div>
              {rateLimit && (
                <div className="rate-limit-info">
                  <p>
                    Requests Remaining: {rateLimit.remaining} /{" "}
                    {rateLimit.limit}
                  </p>
                  <p>
                    Next Reset:{" "}
                    {new Date(rateLimit.reset * 1000).toLocaleString()}
                  </p>
                </div>
              )}
            </>
          ) : (
            <>
              <h1 className="h1-no-login">
                Login to get access to our highest quality wallpapers.
              </h1>
              <div className="search--container"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
