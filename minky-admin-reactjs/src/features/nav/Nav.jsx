import React from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

function Nav() {
  return (
    <div>
      <div className="app-header">
        <a className="app-header__logo" href="index.html">
          Minky
        </a>
        {/* <!-- Sidebar toggle button-->*/}
        <a
          className="app-sidebar__toggle"
          href="#"
          data-toggle="sidebar"
          aria-label="Hide Sidebar"
        >
          <IoMenuSharp />
        </a>
        {/* <!-- Navbar Right Menu--> */}
        <ul className="app-nav">
          <li className="app-search">
            <input
              className="app-search__input"
              type="search"
              placeholder="Search"
            />
            <button className="app-search__button">
              <FaSearch />
            </button>
          </li>
          {/* <!--Notification Menu--> */}
          <li className="dropdown mt-1">
            <a
              className="app-nav__item"
              href="#"
              data-toggle="dropdown"
              aria-label="Show notifications"
            >
              <FaBell />
            </a>
          </li>
          {/* <!-- User Menu--> */}
          <li className="dropdown mt-1">
            <a
              className="app-nav__item"
              href="#"
              data-toggle="dropdown"
              aria-label="Open Profile Menu"
            >
              <FaUser />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
