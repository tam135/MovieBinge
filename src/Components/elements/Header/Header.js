import React from "react";
import { Link } from "react-router-dom";
import moviedb from './moviedb.png'
import bingelogo from './bingelogo.png'
import "./Header.css";

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <Link to="/">
          <img
            src={bingelogo}
            className="rmdb-logo"
            alt="rmdb-logo"
          />
        </Link>
        <img
          src={moviedb}
          className="rmdb-tmdb-logo"
          alt="tmdb-logo"
        />
      </div>
    </div>
  );
};

export default Header;
