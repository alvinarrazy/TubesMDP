import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/SideNav.css';
import './styles/Header.css';
import { connect } from 'react-redux';

import {navOpen} from '../redux/actions/NavAction'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        // this.slideNav = this.slideNav.bind(this);

        // this.state = {
        //     navOpen: false
        // }

    }

    // slideNav(e) {
    //     e.preventDefault();
    //     console.log("E");
    //     this.setState(state => ({
    //         navOpen: !state.navOpen
    //     }));
    // }

    componentDidMount(){
        console.log(this.props.navOpen)
    }

    render() {
        return (
            <>
            {/* Header */}
                <div className="header">
                    <div className="left" style={{marginTop: '7px'}}>
                        <div className="hamburg" style={{float: 'left'}}>
                            <button style={{paddingLeft: '10px'}} onClick={this.props.slideNav} className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                                aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
                                    className="fas fa-bars fa-1x"></i></span></button>
                        </div>
                        <div style={{float: 'right',marginLeft: '30px',paddingTop: '7px'}}>FANTASY CARD COLLECTION</div>
                    </div>
                    <div className="right">
                        {/* <img style={{marginTop:'4px',marginRight:'10px', height:'50px'}} src="/images/UNDIP.png"/>
                        <img style={{height:'50px',marginTop:'4px'}} src="/images/industri-undip.png"/> */}
                    </div>
                </div>
            {/* Side Navbar */}
                <div className='sidenav' style={this.props.navOpen ? { width: "300px" } : { width: "0px" }}>
                    <a className="closebtn"  >
                        <button onClick={this.props.slideNav} className="close" aria-label="Close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </a>
                    <div className='account-container'>
                        <div className='account-pic'>
                            <img src='/images/ClipartKey_2132934.png'/>
                        </div>
                        <div className='account-detail'>
                            <a>Alvin Arrazy</a>
                        </div>
                    </div>
                    <br/>
                    <Link to="/">Home Page</Link>
                    <Link to="/addcard">Add New Card</Link>
                    <hr />
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/">Logout</Link>
                </div>
            </>
        )

    }
}

const mapStateToProps = (state) => {
	return{
		navOpen: state.openNav.navOpen
	}
}

const mapDispatchToProps = (dispatch) => {
    return{
        slideNav: () => dispatch(navOpen())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
