import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <Link to="/">About</Link>
        <Link to="/movies">Movies</Link>
      </ul>
    </div>
  );
};

export default Header;
