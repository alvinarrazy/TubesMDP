import React from 'react';
import {NavbarOnlyLogo} from '../Navbar';
import '../styles/RegForm.css';
import {login} from '../../redux/actions/LoginAction';
import {connect} from 'react-redux';

class LoginPage extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		 
		this.state = {
			user: {
				username: '',
				password: '',
			},//state di kirim ke global lewat reducer, kalo gk perlu ke global, gk usah tambahin di reducer
			submitted: false
		}
		
	}

	handleChange(event){
		const{name, value} = event.target;
		const{user} = this.state;
		this.setState({
			user:{
				...user,
				[name]: value //name dan value component dari <input> tag
			}
		});
	}

	handleSubmit(event){
		event.preventDefault();
		const {user} = this.state
        this.setState({ submitted: true });
        if (user.username && user.password) {
			this.props.login(user);
			console.log(user.username + user.password);
        }
	}
    render(){

		const{user} = this.state
		return(
			<>
			<NavbarOnlyLogo/>
			<div class="login-form">
				<h1>Log in</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} name="username" value={user.username} placeholder="Username" required/>				
					<input type="password" onChange={this.handleChange} name="password" value={user.password} placeholder="Password" required/>
					<input type="submit"  value="Log in"/>
				</form>
			</div>
			</>
		)

	}
    
}

const mapStateToProps = (state) => {
	return{
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		login: user => dispatch(login(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
