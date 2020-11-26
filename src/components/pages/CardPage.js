import React, { Fragment } from 'react';
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

import { connect } from 'react-redux';

import { getAllPost } from '../../redux/actions/PostAction';
import { STATIC_PATH } from '../../config';


class CardPage extends React.Component {
    constructor(props) {
        super(props);
        this.arrangingTable = this.arrangingTable.bind(this);

        this.state = {
            posts: [],
            counts: 0
        }
    }

    componentDidMount() {
        this.props.getAllPost()
        console.log(JSON.parse(localStorage.getItem("posts")));

        this.setState({
            posts: JSON.parse(localStorage.getItem("posts"))
        })

    }

    arrangingTable() {

    }
    render() {
        const post = this.state.posts
        return (
            <>
                <SideNav />
                <div className='card-table'>
                    <table>
                        <Fragment>
                            {
                                
                                this.state.posts.map(post => {
                                    return (
                                        <td><NewCard src={STATIC_PATH + post.image}
                                            name={post.name}
                                            description={post.description}
                                            hp={post.hp}
                                            mp={post.mp}
                                            atk={post.atk}
                                            def={post.def}
                                            spd={post.spd}
                                            acc={post.acc}
                                        />
                                        </td>
                                    )
                                })
                            }
                        </Fragment>
                        {/* <tr>
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
                        </tr> */}
                    </table>
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
        getAllPost: () => dispatch(getAllPost())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);