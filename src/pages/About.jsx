import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="text-container">
          <h1>Pegasus Wallpaper App Made by</h1>
          <p>🚀 A crew of pixel poets painting your screens with magic! ✨</p>
        </div>
        <div className="card-holder">
          <div className="card">
            <div className="card-container">
              <h1>Jatin Bhandari</h1>
              <p>🌟 The code wizard behind the artistry! ✨</p>
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Annie"
                alt="avatar"
              />
              <div className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">Github</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-container">
              <h1>Harsh Shah</h1>
              <p>🔥 The coding ninja on a mission to dazzle your screens! 🎉</p>
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Angel"
                alt="avatar"
              />
              <div className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">Github</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-container">
              <h1>Karan Khanka</h1>
              <p>
                🌙 The nocturnal developer conjuring dreams for your devices! 🌌
              </p>
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight"
                alt="avatar"
              />
              <div className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
