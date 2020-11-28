import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../redux/actions/PostAction';
import axios from 'axios';
import { STATIC_PATH } from '../../config';


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
import '../styles/HeroSection.css';

class AddCardPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            preferredPost: [],
            postGet: false
        }
    }


    componentDidMount() {
        // this.props.getPost(id)
        const id = window.location.search.replace('?', '');
        var ret = this.props.posts.filter(function (item) {
            return item._id === id;
        });

        this.setState({
            preferredPost: ret
        })
        if (this.state.preferredPost) {
            this.setState({
                ...this.state,
                postGet: true
            })
        }
        console.log(this.state.preferredPost)
        console.log(ret)
    }

    render() {
        const { preferredPost } = this.state;
        console.log(preferredPost)
        const id = window.location.search.replace('?', '');
        var ret = this.props.posts.filter(function (item) {
            return item._id === id;
        });

        return (
            <>
                <SideNav />
                <br />
                <br />

                <div className='hero-container'>
                    <Fragment>
                        {
                            ret.map(preferredPost => {
                                return (
                                    <div  className='box-content'>
                                        <div style={{width: '30rem'}} className="tabel-content">
                                            <br />
                                            <tr>
                                                <td>Name</td>
                                                <td2>:</td2>
                                                <td3>{preferredPost.name}</td3>
                                            </tr>
                                            <tr>
                                                <td>Health Points</td>
                                                <td2>:</td2>
                                                <td3>{preferredPost.hp}</td3>
                                            </tr>
                                            <tr>
                                                <td>Magic Points</td>
                                                <td2>:</td2>
                                                <td3>{preferredPost.mp}</td3>
                                            </tr>
                                            <tr>
                                                <td>Attack</td>
                                                <td2>:</td2>
                                                <td3>{preferredPost.atk}</td3>
                                            </tr>
                                            <tr>
                                                <td>Defense</td>
                                                <td2>:</td2>
                                                <td3>{preferredPost.def}</td3>
                                            </tr>
                                            <tr>
                                                <td>Speed</td>
                                                <td2>:</td2>
                                                <td3>{preferredPost.spd}</td3>
                                            </tr>
                                            <tr>
                                                <td>Accuracy</td>
                                                <td2>:</td2>
                                                <td3>{preferredPost.acc}</td3>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td style={{fontWeight: 'bold'}}>Description</td>
                                                <td2></td2>
                                                <td3>
                                                </td3>
                                                <div className='desc-box'>
                                                {preferredPost.description}
                                                </div>
                                            </tr>
                                        </div>
                                        <img src={STATIC_PATH + preferredPost.image} />
                                    </div>

                                )
                            })
                        }
                    </Fragment>
                </div>
                <style jsx>{`
        .hero-container img{
          right: 60px;
          top:40px;
          position: inherit;
          height: 200px;
          width: auto;
          border-radius: 10%;
          -webkit-box-shadow: 0px 1px 10px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow:    0px 1px 10px 0px rgba(50, 50, 50, 0.75);
  box-shadow:         0px 1px 10px 0px rgba(50, 50, 50, 0.75);
        }


        `}</style>

            </>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts.currentPost
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardPage);