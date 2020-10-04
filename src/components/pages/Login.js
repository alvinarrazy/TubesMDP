import React from 'react';
import {NavbarOnlyLogo} from '../Navbar';
import '../styles/RegForm.css';

function Login() {
    return (
        <>
        <NavbarOnlyLogo/>
        <div class="login-form">
			<h1>Log in</h1>
			<form action="creatingaccount" method="POST">
				<input type="text" name="email" placeholder="Email" required/>				
				<input type="password" name="password" placeholder="Password" required/>
				<input type="submit" value="Log in"/>
			</form>
		</div>
        </>
    )
}

export default Login
