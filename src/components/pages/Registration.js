import React from 'react';
import NavbarOnlyLogo from '../NavbarOnlyLogo';
import '../styles/RegForm.css';
import {register} from '../../redux/actions/RegisterAction'
import {connect} from 'react-redux';

class RegistrationPage extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		 
		this.state = {
			newUser:{
				fullname: '',
				username: '',
				email: '',
				password: '',
			},
			submitted: false
		}
		
	  }

	  handleChange(event) {
			const { name, value } = event.target;
			const { newUser } = this.state;
			this.setState({
				newUser: {
					...newUser,
					[name]: value
				}
			});
		}	

	  handleSubmit(e){
		e.preventDefault();
		const {newUser} = this.state;
		this.setState({
			submitted: true
		});
        if (newUser.fullname && newUser.username && newUser.email && newUser.password) {
			// console.log(newUser.fullname)
			this.props.register(newUser)
		}
	  }

	render(){
		const {newUser} = this.state;
		return (
        <>
        <NavbarOnlyLogo/>
        <div className="login-form">
			<h1>Join us NOW!!!!</h1>
			<form onSubmit={this.handleSubmit}>
				<input type="text" onChange={this.handleChange} name="fullname" value={newUser.fullname} placeholder="Full Name" required/>				
				<input type="text" onChange={this.handleChange} name="username" value={newUser.username} placeholder="Username" required/>				
				<input type="text" onChange={this.handleChange} name="email"value={newUser.email} placeholder="Email" required/>				
				<input type="password" placeholder="Password" onChange={this.handleChange} name="password" value={newUser.password} required/>
				<input type="submit" value="Sign Up"/>
			</form>
		</div>
        </>
    )
	}

}

const mapStateToProps = (state, ownProps) => {
	return {
	  registering: state.registering
	}
  };


  const mapDispatchToProps = (dispatch) => {
	return {
	  register: newUser => dispatch(register(newUser))
	}
  };

  export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
