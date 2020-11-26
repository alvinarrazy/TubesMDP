import React from 'react';

//Components
import Navbar from '../Navbar';
import Footer from '../Footer';
import NewCard from '../NewCard';
import SideNav from '../SideNav';

//Styling
import '../../App.css';
import '../styles/NewCard.css';
import '../styles/Footer.css';
import '../styles/AddCardTable.css';

class CardPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        // this.state = {
        //     name: 
        // }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            ...this.state,
            [name]: value

        });
    }

    handleSubmit(e){
		e.preventDefault();
		const {newUser} = this.state;
		this.setState({
			submitted: true
		});
        if (newUser.fullname && newUser.username && newUser.email && newUser.password) {
			// console.log(newUser.fullname)
			this.props.register(newUser)
		}
	  }

    render() {
        return (
            <>
                <SideNav />
                <h2 style={{ position: 'absolute', top: '70px', left: '200px' }}>Add new Card</h2>
                <div className="container">
                    <form>
                        <div className="firstcol">
                            <table>
                                <tr>
                                    <td><label>Name :</label></td>
                                    <td1><input type='text' name='name' /></td1>
                                    <td><label>Image :</label></td>
                                    <td1><input type='file' name=''/></td1>
                                </tr>
                                <tr>
                                    <td><label>Health Point :</label></td>
                                    <td1><input type='text' name='hp' /></td1>
                                    <td><label>Magic Point :</label></td>
                                    <td1><input type='text' name='mp' /></td1>
                                </tr>
                                <tr>
                                    <td><label>Attack :</label></td>
                                    <td1><input type='text' name='atk' /></td1>
                                    <td><label>Defense :</label></td>
                                    <td1><input type='text' name='def' /></td1>
                                </tr>
                                <tr>
                                    <td><label>Accuracy :</label></td>
                                    <td1><input type='text' name='acc' /></td1>
                                    <td><label>Speed :</label></td>
                                    <td1><input type='text' name='spd' /></td1>
                                </tr>
                            </table>
                            <input type="submit" />
                        </div>
                    </form>
                </div>

            </>
        )

    }
}

export default CardPage;