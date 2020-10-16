import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './styles/Navbar.css';
import {connect} from 'react-redux';

const Navbar = ({loggedIn, user}) => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);
    
    console.log(loggedIn);
    console.log(user);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        HIMASKOM 
                        <img src="/images/logo-himaskom.png"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {loggedIn &&
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Your Store
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Accounts
                            </Link>
                        </li>     
                        <Link
                            to='/logout'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Log out
                        </Link>                   
                    </ul>
                    }

                    {!loggedIn &&
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home 
                            </Link>
                        </li>
                        <Link
                            to='/login'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Log in
                        </Link>  
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>                        
                    </ul>
                    }
                    {!loggedIn && button && <Link to='/login'><Button buttonStyle='btn--outline'>LOG IN</Button></Link>}
                    {loggedIn && button && <Link to='/logout'><Button buttonStyle='btn--outline'>LOG OUT</Button></Link>}
                </div>
            </nav>
        </>
    )
}


const mapStateToProps = (state) => {
	return{
        loggedIn: state.authentication.loggedIn,
        user: state.authentication.user//harus lengkap brooo
	}
}


export default connect(mapStateToProps)(Navbar);
