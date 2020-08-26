import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
      <div>
            <div className = "header">
            <img src={logo} alt="logo"/>
        </div>
        <nav className="navbar">
            <div className="left-nav-item">
                <a href="/delivery">Deliver To <strong>Bangladesh</strong></a>
            </div>
            <div className="cen-nav-item">
                <a href="/deals">Today's Deals</a>
                <a href="/customer-service">Customer Service</a>
                <a href="/gift-cards">Gift Cards</a>
            </div>
            <div className="right-nav-item">
                <a href="/covid-19"><strong>Amazon Response To Covid 19</strong></a>
            </div>
        </nav>
      </div>
    );
};

export default Header;