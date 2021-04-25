import React from "react";
import "./BlogNavbar.css";

const BlogNavbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-content">
        <div class="navbar-brand">Navbar</div>
        <a href="#">Home</a>
        <a href="#">Link</a>
      </div>

      <div class="navbar-end">
        <form class="search-bar outset-neomo">
          <input type="text" class="search-bar--text" placeholder="Search" />
          <button type="submit" class="search-bar--button" value="Search">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default BlogNavbar;
