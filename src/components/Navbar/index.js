import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div>
      <header id="header-mobile">
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
        
        <div class="header-social-links">
          <a href="https://dribbble.com/fi_dunnington" class="dribbble" target="_blank"><i class="fa fa-dribbble"></i></a>
          <a href="https://github.com/fdunnington" class="github" target="_blank"><i class="fa fa-github"></i></a>
          <a href="#" class="instagram"><i class="fa fa-instagram" target="_blank"></i></a>
          <a href="https://www.linkedin.com/in/fidunnington/" class="linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
        </div> 

      </header>
      <header id="header-full" class="header">
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
          <a href="#" class="instagram"><i class="fa fa-instagram" target="_blank"></i></a>
          <a href="https://www.linkedin.com/in/fidunnington/" class="linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
        </div>
        <i class="mobile-nav-toggle mobile-nav-show fa fa-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none fa fa-x"></i>
      </header>
    </div>
  );
}

export default Navbar;
