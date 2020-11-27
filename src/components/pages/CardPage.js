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

        this.state = {
            posts: [],
            counts: 0
        }
    }
    
    componentDidMount() {
        this.props.getAllPost()
        this.setState({
            posts: JSON.parse(localStorage.getItem("posts"))
        })
        window.addEventListener('storage', this.postsUpdated())
        console.log(JSON.parse(localStorage.getItem("posts")));
    }

    postsUpdated(){
        if(this.state.posts === JSON.parse(localStorage.getItem("posts"))){
            window.location.reload();
        }
        console.log(this.state.posts)
    }


    render() {
        const post = this.state.posts
        console.log(this.state.posts)

        return (
            <>
                <SideNav />
                <div className='grid-container'>
                    <Fragment>
                        {
                            this.state.posts.map(post => {
                                return (
                                    <div className='grid-item'><NewCard src={STATIC_PATH + post.image}
                                        name={post.name}
                                        description={post.description}
                                        hp={post.hp}
                                        mp={post.mp}
                                        atk={post.atk}
                                        def={post.def}
                                        spd={post.spd}
                                        acc={post.acc}
                                    />
                                    </div>
                                )
                            })
                        }
                    </Fragment>
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