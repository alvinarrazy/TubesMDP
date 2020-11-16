import React, {Fragment} from 'react';
import NavbarOnlyLogo from '../NavbarOnlyLogo';
import '../styles/RegForm.css';
import {register} from '../../redux/actions/RegisterAction'
import {connect} from 'react-redux';
import CardItem from '../CardItem';
import {getAllPost} from '../../redux/actions/PostAction';

class PostPage extends React.Component {
	constructor(props){
		super(props);
		 
		this.state = {
			posts: []
		}
	  }

	  componentDidMount(){
		this.props.getAllPost()
		console.log(JSON.parse(localStorage.getItem("posts")));
		
		this.setState({
			posts: JSON.parse(localStorage.getItem("posts"))
		})
	  }

	render(){
		console.log(this.state.posts);
//tambah gambar
		return (
        <>
			<Fragment>
				{
					this.state.posts.map(post => {
						return <CardItem text={post.text} label={post.label}/>//Belum ditambahin path gambarnya
					})
				}
			</Fragment>
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

  export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
