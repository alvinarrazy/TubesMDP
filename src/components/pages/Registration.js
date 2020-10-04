import React from 'react';
import {NavbarOnlyLogo} from '../Navbar';
import '../styles/RegForm.css';
import {register} from '../../redux/actions/RegisterAction'

class Registration extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		 
		this.state = {
			User:{
				fullname: '',
				username: '',
				email: '',
				password: '',
			},
			submitted: false
		}
		
	  }

	  handleChange(e){
		this.setState({
			User: e.target.value
		  })
	  }

	  handleSubmit(e){
		e.preventDefault();
		let newUser = {
		  fullname: this.state.fullname,
		  username: this.state.username,
		  email: this.state.email,
		  password: this.state.password
		}
		this.setState({
			fullname: '',
			username: '',
			email: '',
			password: '',
		});
		this.props.register(newUser); //ERROR {TypeError: this.props.register is not a function}
		//CARI DI VIDEO KEMARIN CARA PAKE FUNGSI DARI this.props.{function_name}()
	  }

	render(){
		return (
        <>
        <NavbarOnlyLogo/>
        <div class="login-form">
			<h1>Join us NOW!!!!</h1>
			<form onSubmit={this.handleSubmit}>
				<input type="text" onChange={this.handleChange} value={this.state.fullname} placeholder="Full Name" required/>				
				<input type="text" onChange={this.handleChange} value={this.state.username} placeholder="Username" required/>				
				<input type="text" onChange={this.handleChange} value={this.state.email} placeholder="Email" required/>				
				<input type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} required/>
				<input type="submit" value="Sign Up"/>
			</form>
		</div>
        </>
    )
	}

}



const actionCreators = {
    register: register
}

export default Registration
