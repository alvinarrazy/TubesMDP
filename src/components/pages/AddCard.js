import React, {useState} from 'react';
import { connect } from 'react-redux';
import { postNewCard } from '../../redux/actions/PostAction';

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

class AddCardPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);

        this.state = {
            newCard: {
                name: '',
                description: '',
                image: null,
                hp: '',
                mp: '',
                atk: '',
                def: '',
                spd: '',
                acc: '',
            }
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { newCard } = this.state;
        // console.log(newCard.name)
        this.setState({
            newCard: {
                ...newCard,
                [name]: value
            }
        });
    }

    onFileChange(event) {
        const { newCard } = this.state;

        // Update the state 
        this.setState({
            newCard: {
                ...newCard,
                image: event.target.files[0]
            }
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        const { newCard } = this.state;
        const formdata = new FormData();

        if (newCard.name && newCard.description && newCard.image && newCard.hp && newCard.mp && newCard.atk && newCard.def && newCard.spd && newCard.acc) {
            console.log(newCard.name)
            formdata.append('name', newCard.name);
            formdata.append('image', newCard.image, newCard.image.name);
            formdata.append('description', newCard.description);
            formdata.append('hp', newCard.hp);
            formdata.append('mp', newCard.mp);
            formdata.append('atk', newCard.atk);
            formdata.append('def', newCard.def);
            formdata.append('acc', newCard.acc);
            formdata.append('spd', newCard.spd);
            this.props.postNewCard(formdata)
            this.setState({
                newCard: {
                    name: '',
                    description: '',
                    image: null,
                    hp: '',
                    mp: '',
                    atk: '',
                    def: '',
                    spd: '',
                    acc: '',
                }
            })
            this.props.history.push('/');
        }
    }

    render() {
        const { newCard } = this.state;
        return (
            <>
                <SideNav />
                <h2 style={{ position: 'absolute', top: '70px', left: '200px' }}>Add new Card</h2>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="firstcol">
                            <table>
                                <tr>
                                    <td><label>Name :</label></td>
                                    <td1><input value={newCard.name} onChange={this.handleChange} type='text' name='name' required /></td1>
                                    <td><label>Image :</label></td>
                                    <td1><input onChange={this.onFileChange} type='file' name='image' required /></td1>
                                </tr>
                                <tr>
                                    <td><label>Health Point :</label></td>
                                    <td1><input value={newCard.hp} onChange={this.handleChange} type='text' name='hp' required /></td1>
                                    <td><label>Magic Point :</label></td>
                                    <td1><input value={newCard.mp} onChange={this.handleChange} type='text' name='mp' required /></td1>
                                </tr>
                                <tr>
                                    <td><label>Attack :</label></td>
                                    <td1><input value={newCard.atk} onChange={this.handleChange} type='text' name='atk' required /></td1>
                                    <td><label>Defense :</label></td>
                                    <td1><input value={newCard.def} onChange={this.handleChange} type='text' name='def' required /></td1>
                                </tr>
                                <tr>
                                    <td><label>Accuracy :</label></td>
                                    <td1><input value={newCard.acc} onChange={this.handleChange} type='text' name='acc' required /></td1>
                                    <td><label>Speed :</label></td>
                                    <td1><input value={newCard.spd} onChange={this.handleChange} type='text' name='spd' required /></td1>
                                </tr>
                            </table>
                            <textarea value={newCard.description} onChange={this.handleChange} name='description' required />
                            <br />
                            <input type="submit" value='Add Card' />
                        </div>
                    </form>
                </div>

            </>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        postNewCard: newCard => dispatch(postNewCard(newCard))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardPage);