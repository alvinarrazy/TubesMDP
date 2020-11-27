import React from 'react';

//Components
import Navbar from '../Navbar';
import Footer from '../Footer';
import NewCard from '../NewCard';
import SideNav from '../SideNav';

//Styling
import '../../App.css';
import '../styles/NewCard.css';
import '../styles/CardTable.css';
import '../styles/Footer.css';

class CardPage extends React.Component {
    render() {
        return (
            <>
                <SideNav />
                <div className='grid-container'>
                    <div className='grid-item'>
                        <NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' />
                    </div>
                    <div className='grid-item'>
                        <NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' />
                    </div>
                    <div className='grid-item'>
                        <NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' />
                    </div>
                    <div className='grid-item'>
                        <NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' />
                    </div>
                    <div className='grid-item'>
                        <NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' />
                    </div>
                    <div className='grid-item'>
                        <NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' />
                    </div>
                    <div className='grid-item'>
                        <NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' />
                    </div>
                    <div className='grid-item'>
                        <NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' />
                    </div>

                </div>


            </>
        )

    }
}

export default CardPage;