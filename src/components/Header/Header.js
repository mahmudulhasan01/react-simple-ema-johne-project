import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <nav>
        <div className="logo-img">
            <img src={logo} alt="" />
        </div>
        
        <div className="nav-link">
            <a href="">Shop</a>
            <a href="">Order Review</a>
            <a href="">Manage Inventory here</a>
        </div>
        </nav>
    );
};

export default Header;