import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoon, faRobot } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return (
    <nav>
      <div className="logo"><a href="">TeachAI</a> </div>
      <ul className="nav-links">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faRobot} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faMoon} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
