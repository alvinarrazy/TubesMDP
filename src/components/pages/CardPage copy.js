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
                <div className='card-table'>
                    <table>
                        <tr>
                            <td><NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' /></td>
                            <td><NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' /></td>
                            <td><NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' /></td>
                        </tr>
                        <tr>
                            <td><NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' /></td>
                            <td><NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' /></td>
                            <td><NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' /></td>
                        </tr>
                        <tr>
                            <td><NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' /></td>
                            <td><NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' /></td>
                            <td><NewCard src='/images/Dark-Magician.jpg' name='Dark Magician' description='tes' /></td>
                        </tr>
                    </table>
                </div>


            </>
        )

    }
}

export default CardPage;