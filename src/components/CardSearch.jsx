import React, { useContext, useState } from "react";
import "./CardSearch.css";
import { Link } from "react-router-dom";

const CardSearch = (props) => {
  return (
    <div className="grid-container">
      {props.data &&
        props.data.map((item, index) => (
          <Link to={`/download/${item.title}`} key={index}>
            <div className="grid-item" key={index}>
              <img src={item.src.original} alt="" loading="lazy" />
              <div className="container-about">
                <div className="author-profile">
                  <img src={item.src.medium} alt="" />
                </div>
                <div className="author-about">
                  <h3>{item.photographer}</h3>
                </div>
              </div>
              <i className="ri-download-line"></i>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default CardSearch;
