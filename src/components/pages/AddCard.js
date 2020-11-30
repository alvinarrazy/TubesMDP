import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postNewCard } from '../../redux/actions/PostAction';

//Components
import SideNav from '../SideNav';

//Styling
import '../../App.css';
import '../styles/NewCard.css';
import '../styles/AddCardTable.css';

class AddCardPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.checkScreenSize = this.checkScreenSize.bind(this);

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
            },
            isMobileView: this.checkScreenSize(),
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

    checkScreenSize() {
        if (window.innerWidth < 1200) {
            return true
        } else if (window.innerWidth > 1200) {
            return false
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1200) {
                this.setState({
                    isMobileView: true
                });
            } else if (window.innerWidth > 1200) {
                this.setState({
                    isMobileView: false
                });
            }
        }, false);
    }

    render() {
        const { newCard } = this.state;
        return (
            <>
                <SideNav />
                {/* Tampilan Mobile */}
                {this.state.isMobileView && <>
                    <h2>Add new Card</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="grid-container">
                                <div className="grid-item">
                                <label>Name :</label>
                                <input value={newCard.name} onChange={this.handleChange} type='text' name='name' required />
                                </div>
                                <div className="grid-item">
                                <label>Image :</label>
                                <input onChange={this.onFileChange} type='file' name='image' required />
                                </div>
                                <div className="grid-item">
                                <label>Health Point :</label>
                                <input value={newCard.hp} onChange={this.handleChange} type='text' name='hp' required />
                                </div>
                                <div className="grid-item">
                                <label>Magic Point :</label>
                                <input value={newCard.mp} onChange={this.handleChange} type='text' name='mp' required />
                                </div>
                                <div className="grid-item">
                                <label>Attack :</label>
                                <input value={newCard.atk} onChange={this.handleChange} type='text' name='atk' required />
                                </div>
                                <div className="grid-item">
                                <label>Defend :</label>
                                <input value={newCard.def} onChange={this.handleChange} type='text' name='def' required />
                                </div>
                                <div className="grid-item">
                                <label>Speed :</label>
                                <input value={newCard.spd} onChange={this.handleChange} type='text' name='spd' required />
                                </div>
                                <div className="grid-item">
                                <label>Accuracy :</label>
                                <input value={newCard.acc} onChange={this.handleChange} type='text' name='acc' required />
                                </div>
                                <label>Description :</label>
                                <textarea value={newCard.description} onChange={this.handleChange} name='description' required />
                                <hr/>
                                <input type="submit" value='Add Card' />
                            </div>
                        </form>
                </>}

                {/* Tampilan Desktop */}
                {!this.state.isMobileView && <>
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
                </>}
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