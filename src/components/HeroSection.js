import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './styles/HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>HIMASKOM 2020</h1>
            <p>Satukan Tekad Bawa Perubahan</p>
            <div className='hero-btns'>

        <Link to='/profile'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              PROFILE
            </Button>
        </Link>
        
        <Link to='/sign-up'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              SIGN UP
            </Button>
        </Link>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.youtube.com/channel/UCnWUCTRzTubxjPYPw4PJlqw';
            }}
        >
          WATCH CHANNEL <i className='far fa-play-circle' />
        </Button>

        
      </div>    
        </div>
    )
}

export default HeroSection
