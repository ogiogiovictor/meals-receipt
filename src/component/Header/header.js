import React from 'react';
import { Link } from 'react-router-dom';
import { ImSpoonKnife, ImParagraphJustify } from 'react-icons/im';

import './header.css';

const Header = () => (
  <div>
    <section className="header">
      <div className="header__logo-box">
        <ImSpoonKnife size={50} color="#450404" />
        <span className="logo_title"> Meals DB</span>
      </div>
      <ul className="nav-link">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category">Category</Link></li>
        <li><Link to="/about">About API</Link></li>
      </ul>

      <div className="mobile-logo"><ImParagraphJustify size={20} /></div>
      {/* <ul className="nav-link-mobile">
            <a href="#" className="closeMenu" id="closeMenu"><ImCross color="white" size={20}/></a>

                <li><Link to="/">Home</Link></li>
                <li><Link to="/category">Category</Link></li>
                <li><Link to="/about">About API</Link></li>
            </ul> */}
    </section>
  </div>
);

export default Header;
