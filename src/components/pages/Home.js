import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import {Navbar} from '../Navbar';

function HomePage(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
        </>
    )
}

export default HomePage;