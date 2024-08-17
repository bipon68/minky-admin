import React, { useState } from "react";
import userphoto from "../../assests/img/profile.jpg";
import {
  FaAngleRight,
  FaChartPie,
  FaCircle,
  FaEdit,
  FaLaptop,
  FaList,
} from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";

function SideBar({ isSidebarOpen }) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleTreeviewToggle = (index) => {
    setExpandedMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <aside className={`app-sidebar ${isSidebarOpen ? "sidenav-toggled" : ""}`}>
      <div className="app-sidebar__user">
        <img className="size-14 rounded-full" src={userphoto} alt="User" />
        <div>
          <p className="app-sidebar__user-name">John Doe</p>
          <p className="app-sidebar__user-designation">Frontend Developer</p>
        </div>
      </div>
      <ul className="app-menu">
        <li>
          <a className="app-menu__item active" href="DashboardPage">
            <AiFillDashboard />
            <span className="app-menu__label">Dashboard</span>
          </a>
        </li>
        <li className={`treeview ${expandedMenu === 0 ? "is-expanded" : ""}`}>
          <a
            className="app-menu__item"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTreeviewToggle(0);
            }}
          >
            <FaLaptop />
            <span className="app-menu__label">UI Elements</span>
            <FaAngleRight />
          </a>
          <ul className={`treeview-menu ${expandedMenu === 0 ? "show" : ""}`}>
            <li>
              <a className="treeview-item" href="tailwind-components.html">
                <FaCircle /> Tailwind Elements
              </a>
            </li>
            <li>
              <a
                className="treeview-item"
                href="https://fontawesome.com/v4.7.0/icons/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCircle /> Font Icons
              </a>
            </li>
            <li>
              <a className="treeview-item" href="ui-cards.html">
                <FaCircle /> Cards
              </a>
            </li>
            <li>
              <a className="treeview-item" href="widgets.html">
                <FaCircle /> Widgets
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="app-menu__item" href="charts.html">
            <FaChartPie />
            <span className="app-menu__label">Charts</span>
          </a>
        </li>
        <li className={`treeview ${expandedMenu === 1 ? "is-expanded" : ""}`}>
          <a
            className="app-menu__item"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTreeviewToggle(1);
            }}
          >
            <FaEdit />
            <span className="app-menu__label">Forms</span>
            <FaAngleRight />
          </a>
          <ul className={`treeview-menu ${expandedMenu === 1 ? "show" : ""}`}>
            <li>
              <a className="treeview-item" href="form-components.html">
                <FaCircle /> Form Components
              </a>
            </li>
            <li>
              <a className="treeview-item" href="form-custom.html">
                <FaCircle /> Custom Components
              </a>
            </li>
            <li>
              <a className="treeview-item" href="form-samples.html">
                <FaCircle /> Form Samples
              </a>
            </li>
            <li>
              <a className="treeview-item" href="form-notifications.html">
                <FaCircle /> Form Notifications
              </a>
            </li>
          </ul>
        </li>
        <li className={`treeview ${expandedMenu === 2 ? "is-expanded" : ""}`}>
          <a
            className="app-menu__item"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTreeviewToggle(2);
            }}
          >
            <FaList />
            <span className="app-menu__label">Tables</span>
            <FaAngleRight />
          </a>
          <ul className={`treeview-menu ${expandedMenu === 2 ? "show" : ""}`}>
            <li>
              <a className="treeview-item" href="table-basic.html">
                <FaCircle /> Basic Tables
              </a>
            </li>
            <li>
              <a className="treeview-item" href="table-data-table.html">
                <FaCircle /> Data Tables
              </a>
            </li>
          </ul>
        </li>
        <li className={`treeview ${expandedMenu === 3 ? "is-expanded" : ""}`}>
          <a
            className="app-menu__item"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTreeviewToggle(3);
            }}
          >
            <FiFileText />
            <span className="app-menu__label">Pages</span>
            <FaAngleRight />
          </a>
          <ul className={`treeview-menu ${expandedMenu === 3 ? "show" : ""}`}>
            <li>
              <a className="treeview-item" href="blank-page.html">
                <FaCircle /> Blank Page
              </a>
            </li>
            <li>
              <a className="treeview-item" href="page-login.html">
                <FaCircle /> Login Page
              </a>
            </li>
            <li>
              <a className="treeview-item" href="page-lockscreen.html">
                <FaCircle /> Lockscreen Page
              </a>
            </li>
            <li>
              <a className="treeview-item" href="page-user.html">
                <FaCircle /> User Page
              </a>
            </li>
            <li>
              <a className="treeview-item" href="page-invoice.html">
                <FaCircle /> Invoice Page
              </a>
            </li>
            <li>
              <a className="treeview-item" href="page-calendar.html">
                <FaCircle /> Calendar Page
              </a>
            </li>
            <li>
              <a className="treeview-item" href="page-mailbox.html">
                <FaCircle /> Mailbox
              </a>
            </li>
            <li>
              <a className="treeview-item" href="page-error.html">
                <FaCircle /> Error Page
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
