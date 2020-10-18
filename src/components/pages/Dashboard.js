import React from 'react';

//Components
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CardItem from '../CardItem';

//Styling
import '../../App.css';
import '../styles/Cards.css';
import '../styles/Footer.css';

function HomePage(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
            
            <div className='cards'>
            <h1>Check out our previous Agenda</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/meme1.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Meme'
                    path='/services'
                    />
                    <CardItem
                    src='images/meme2.png'
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Meme'
                    path='/services'
                    />
                </ul>{/*Beda garis*/}
                <ul className='cards__items'>
                    <CardItem
                    src='images/meme3.jpg'
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Meme'
                    path='/services'
                    />
                    <CardItem
                    src='images/meme4.jpg'
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Meme'
                    path='/products'
                    />
                    <CardItem
                    src='images/meme5.png'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Meme'
                    path='/sign-up'
                    />
                </ul>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default HomePage;