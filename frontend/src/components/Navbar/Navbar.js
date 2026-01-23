import React, { useState } from 'react';
import './Navbar.css'; 
import Logo from './FindYourWay_Logo.png';


const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
    
        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        };
    
    return (
        <div>
            <div className="BleuBar-container">
                <div className="BleuBar">
                </div>
            </div>
            <div className="navbar">
                <div className="logo">   
                    <a href=""><img src={Logo} alt="Logo" /></a> 
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>
                <nav className={menuOpen ? 'active' : ''}>
                    <ul>
                        <li><a href="">Églises</a></li>
                        <li><a href="">Forum</a></li>
                        <li><a href="">Évenements</a></li>
                    </ul>   
                </nav>   
            </div>
        </div>
          
    )
}

export default Navbar;
