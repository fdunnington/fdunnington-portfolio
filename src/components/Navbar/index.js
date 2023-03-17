import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <div>
      <header id="header-full">
        <div className="header">
          <a href="/" className="logo">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <h1>.fiDunnington</h1>
              </NavLink>
          </a>
        </div>
        <div className="header">
          <nav className="navbar">
            <div>
              <ul className="navbar-nav">
              <li className="nav-item">
                  <NavLink
                    to="/about"
                    end
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/projects"
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
                    to="/contact"
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
        </div>
        <div className="header">
          <div className="header-social-links">
            <a href="https://dribbble.com/fi_dunnington" className="dribbble" target="_blank"><i className="fa fa-dribbble"></i></a>
            <a href="https://github.com/fdunnington" className="github" target="_blank"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/fidunnington/" className="linkedin" target="_blank"><i className="fa fa-linkedin"></i></a>
          </div> 
        </div>

      </header>
      <header id="header-mobile">
        <div className="header-mobile">
          <a href="/" className="logo">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <h1>.fiDunnington</h1>
            </NavLink>
          </a>

          <nav className="navbar">
            <div>
              <ul className="navbar-nav">
              <li className="nav-item">
                  <NavLink
                    to="/about"
                    end
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/projects"
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
                    to="/contact"
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

          <div className="header-social-links">
          <a href="https://dribbble.com/fi_dunnington" className="dribbble" target="_blank"><i className="fa fa-dribbble"></i></a>
          <a href="https://github.com/fdunnington" className="github" target="_blank"><i className="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/fidunnington/" className="linkedin" target="_blank"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>      
        
      </header>
    </div>
  );
}

export default Navbar;
