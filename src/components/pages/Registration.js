import React from 'react';
import {NavbarOnlyLogo} from '../Navbar';
import '../styles/RegForm.css';
import {register} from '../../redux/actions/RegisterAction'
import {connect} from 'react-redux';

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

	  handleChange(event) {
			const { name, value } = event.target;
			const { User } = this.state;
			this.setState({
				User: {
					...User,
					[name]: value
				}
			});
		}	
		//PAKE YANG INI DH BISA INPUT

	  //-----------------------------------------handleSubmit problem------------------------------//


	  handleSubmit(e){
		e.preventDefault();
		const {User} = this.state;
		this.setState({
			submitted: true
		});
		console.log(User.fullname)
		//this.props.register(User)
	  }
	  //PAKE YANG INI, UDAH BISA READ FULLNAME DI CONSOLE LOG
	  //TINGGAL PIKIRIN CARA PAKE "this.props.register(User)"



	  //-----------------------------------------handleSubmit problem------------------------------//




	render(){
		const {User} = this.state;
		return (
        <>
        <NavbarOnlyLogo/>
        <div class="login-form">
			<h1>Join us NOW!!!!</h1>
			<form onSubmit={this.handleSubmit}>
				<input type="text" onChange={this.handleChange} name="fullname" value={User.fullname} placeholder="Full Name" required/>				
				<input type="text" onChange={this.handleChange} name="username" value={User.username} placeholder="Username" required/>				
				<input type="text" onChange={this.handleChange} name="email"value={User.email} placeholder="Email" required/>				
				<input type="password" placeholder="Password" onChange={this.handleChange} name="password" value={User.password} required/>
				<input type="submit" value="Sign Up"/>
			</form>
		</div>
        </>
    )
	}

}

const mapStateToProps = (state, ownProps) => {
	return {
	  User: state.User
	}
  };


  const mapDispatchToProps = (dispatch) => {
	return {
	  register: register
	}
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Registration);

  //PIKIRIN JUGA GIMANA CARANYA PINDAHIN PROPS KE STORAGE