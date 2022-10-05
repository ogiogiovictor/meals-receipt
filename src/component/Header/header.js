import React from 'react';
import { Link } from 'react-router-dom';
import { ImSpoonKnife, ImParagraphJustify } from "react-icons/im";

import './header.css';

const Header = () => {
    return (
    <div>
        <section className="header">
            <div className="header__logo-box"><ImSpoonKnife  size={50} color="#450404"/><span className="logo_title"> Meals DB</span></div>
            <ul className="nav-link">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Category</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">API</Link></li>
            </ul>

            <div className='mobile-logo'><ImParagraphJustify size={20} /></div>
            <ul className="nav-link-mobile">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Category</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">API</Link></li>
            </ul>
        </section>
    </div>
    );
}

export default Header;