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

        this.loadLocalCards = this.loadLocalCards.bind(this)
        this.state = {
            preferredPosts: ''
        }
    }

    loadLocalCards() {
        var cardList = [
            {
                id: '46986414',
                name: 'Dark Magician',
                atk: '2500',
                def: '2100',
                description: 'The ultimate wizard in terms of attack and defense.',
                src: '/images/Dark-Magician.jpg'
            },
            {
                id: '74677422',
                name: 'Red-Eyes Black Dragon',
                atk: '2400',
                def: '2000',
                description: 'A ferocious dragon with a deadly attack.',
                src: '/images/Red-Eyes_Black_Dragon.png'
            },
            {
                id: '89631139',
                name: 'Blue-Eyes White Dragon',
                atk: '3000',
                def: '2500',
                description: 'This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.',
                src: '/images/Blue-Eyes_White_Dragon.png'
            },
            {
                id: '10000000',
                name: 'Obelisk the Tormentor',
                atk: '4000',
                def: '4000',
                description: "Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Neither player can target this card with card effects. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the GY. You can Tribute 2 monsters; destroy all monsters your opponent controls. This card cannot declare an attack the turn this effect is activated.",
                src: '/images/Obelisk-the-tormentor.jpg'
            },
            {
                id: '10000020',
                name: 'Slifer the Sky Dragon',
                atk: '?',
                def: '?',
                description: "Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the GY. Gains 1000 ATK/DEF for each card in your hand. If a monster(s) is Normal or Special Summoned to your opponent's field in Attack Position: That monster(s) loses 2000 ATK, then if its ATK has been reduced to 0 as a result, destroy it.",
                src: '/images/Slifer.jpg'
            },
            {
                id: '10000010',
                name: 'The Winged Dragon of Ra',
                atk: '?',
                def: '?',
                description: "Cannot be Special Summoned. Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, other cards and effects cannot be activated. When this card is Normal Summoned: You can pay LP so that you only have 100 left; this card gains ATK/DEF equal to the amount of LP paid. You can pay 1000 LP, then target 1 monster on the field; destroy that target.",
                src: '/images/ra.jpg'
            },
        ]
        localStorage.setItem('localcards', JSON.stringify(cardList))
        return dispatch => {
            dispatch({
              type: 'LOAD_CARDS'
            })
          }
    }

    componentDidMount() {
        //this.props.getAllPost()
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
        if (!this.props.cardLoaded) {
            this.loadLocalCards();
            console.log('Sudah ditambahkan')
          }
        const cards = JSON.parse(localStorage.getItem('localcards'));

        return (
            <>
                <SideNav />
                <div className='grid-container'>
                    <Fragment>
                        {
                            cards.map(post => {
                                return (
                                    <div className='grid-item'><NewCard src={post.src}
                                        name={post.name}
                                        description={post.description}
                                        href={'/getonecard:?' + post.id}
                                        atk={post.atk}
                                        def={post.def}
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
        posts: state.posts.currentPost,
        cardLoaded: state.posts.cardLoaded
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        getAllPost: () => dispatch(getAllPost()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);