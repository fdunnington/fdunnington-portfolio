import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <div>
      <header id="header-full">
        <div class="header">
          <a href="/" class="logo">
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
        <div class="header">
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
        <div class="header">
          <div class="header-social-links">
            <a href="https://dribbble.com/fi_dunnington" class="dribbble" target="_blank"><i class="fa fa-dribbble"></i></a>
            <a href="https://github.com/fdunnington" class="github" target="_blank"><i class="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/fidunnington/" class="linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
          </div> 
        </div>

      </header>
      <header id="header-mobile">
        <div class="header-mobile">
          <a href="/" class="logo">
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

          <div class="header-social-links">
          <a href="https://dribbble.com/fi_dunnington" class="dribbble" target="_blank"><i class="fa fa-dribbble"></i></a>
          <a href="https://github.com/fdunnington" class="github" target="_blank"><i class="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/fidunnington/" class="linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>      
        
      </header>
    </div>
  );
}

export default Navbar;
