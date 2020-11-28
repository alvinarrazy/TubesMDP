import React, { Fragment } from 'react';
//Components
import NewCard from '../NewCard';
import SideNav from '../SideNav';

//Styling
import '../../App.css';
import '../styles/NewCard.css';
import '../styles/CardTable.css';

import { connect } from 'react-redux';

import { getAllPost } from '../../redux/actions/PostAction';
import { STATIC_PATH } from '../../config';


class CardPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            preferredPosts: ''
        }
    }
    
    componentDidMount() {
        this.props.getAllPost()
        // const id = window.location.search.replace('?', '');
        // var ret = this.props.posts.filter(function (item) {
        //     return item._id === id;
        // });

        //  this.setState({
        //      preferredPost: ret[0]
        //  })
        // console.log(ret[0])
        // this.setState({
        //     posts: JSON.parse(localStorage.getItem("posts"))
        // })
        // console.log(JSON.parse(localStorage.getItem("posts")));
        // console.log(JSON.parse(localStorage.getItem("preferredPosts")));
    }


    render() {
        const post = this.props.posts
        console.log(this.state.preferredPosts)

        return (
            <>
                <SideNav />
                <div className='grid-container'>
                    <Fragment>
                        {
                            this.props.posts.map(post => {
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
                                        href={'/getonecard:?' + post._id}
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
        posts: state.posts.currentPost
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        getAllPost: () => dispatch(getAllPost()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);