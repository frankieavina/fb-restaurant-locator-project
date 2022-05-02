import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from '@material-ui/core/searchIcon' ;

const Header = () => {
  return (
    <div className="headerRaper">
      <div className="title">
        <h1>Restaurant Search Columbus, Ohio:</h1>
      </div>
      <div className="search">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <inputbase placeholder="Search......"
        />
      </div>
    </div>
  );
};
export default Header;
