import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
    return(
    <search>
      <div className="navbar__center">
        <div className="navbar__search">
          <input type="text" placeholder="Start your search" />
          <FaSearch className="navbar__searchIcon" />
        </div>
      </div>

     
    </search>
  );
}

export default SearchBar;
