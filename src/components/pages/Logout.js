import React from 'react';
import NavbarOnlyLogo from '../NavbarOnlyLogo';
import '../styles/RegForm.css';
import {logout} from '../../redux/actions/LogoutAction';
import {connect} from 'react-redux';
import {history} from '../../redux/helpers/history';


class Logout extends React.Component {
    constructor(props){
        super(props);
        this.logingOut = this.logingOut.bind(this);

    }

    logingOut(){
        console.log("dah sampe sini");

        // this.props.logout();
    }

    componentDidMount(){
        console.log("dah sampe sini");
        this.props.logout();
        console.log(this.props.loggedIn);
        setTimeout(() => {  this.props.history.push('/'); }, 2000);
        
    }

    render(){
        return(
        <>
            <ul>Logging out now</ul>
        </>
        )

    }
}

const mapStateToProps = (state) => {
	return{
		loggedIn: state.authentication
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		logout: () => dispatch(logout())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
