import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './styles/Navbar.css';


function NavbarOnlyLogo(){
    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    HIMASKOM 2020
                    <img src="/images/logo-himaskom.png"/>
                </Link>
            </div>
        </nav>
        </>
    )
}

export default NavbarOnlyLogo;