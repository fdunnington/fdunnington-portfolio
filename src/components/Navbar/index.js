import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        Fi Dunnington
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
