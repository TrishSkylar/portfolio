import React from 'react';
import { Link } from 'react-router-dom';

/* Icons */
import '../../assets/icons/style.css';

/* Styles */
import './Header.css';

export default props => {
  const {
    data,
    translate
  } = props;

  const toggleMenu = e => {
    document.getElementById('menu').classList.toggle('showMenu');
    const btnMenu = document.getElementById('btn-menu');
    btnMenu.classList.toggle('icon-menu');
    btnMenu.classList.toggle('icon-arrow-right');
  }

  return (
    <header className="header flex-container">
      <span
        id="btn-menu"
        className="icon-menu flex-container"
        onClick={ toggleMenu }
      />
      <nav className="nav">
        <ul id="menu" className="menu flex-container">
          <li className="menu-item">
            <Link
              className="menu-link"
              to="/"
              onClick={ toggleMenu }
            >
              { data.nav.option1 }
            </Link>
          </li>
          <li className="menu-item">
            <Link
              className="menu-link"
              to="/work"
              onClick={ toggleMenu }
            >
              { data.nav.option2 }
            </Link>
          </li>
          <li className="menu-item">
            <Link
              className="menu-link"
              to="/contact"
              onClick={ toggleMenu }
            >
              { data.nav.option3 }
            </Link>
          </li>
          <li className="menu-item">
            <Link
              className="menu-link"
              to="/about-me"
              onClick={ toggleMenu }
            >
              { data.nav.option4 }
            </Link>
          </li>
        </ul>
      </nav>
      <div className="translations-container flex-container">
        <span
          onClick={ () => translate('en') }
        >
          en
        </span>
        <span
          onClick={ () => translate('es') }
        >
          es
        </span>
      </div>
      <div className="social-networks-container flex-container">
        <a
          aria-label="Link for my LinkedIn profile"
          rel="noreferrer"
          alt="LinkedIn profile"
          className="icon-linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/dsucaria"
        />
        <a
          aria-label="Link for my LinkedIn profile"
          rel="noreferrer"
          alt="LinkedIn profile"
          className="icon-github"
          target="_blank"
          href="https://github.com/TrishSkylar"
        />
      </div>
    </header>
  );
}