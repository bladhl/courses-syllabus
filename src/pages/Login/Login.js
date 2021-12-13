import React from 'react';
import './Login.css';

function Login() {
	return (
		<div className="container">
			<div className="login">
				<h1>Courses Syllabus</h1>
				<form className="login-form">
					<label htmlFor="code">
						<span>Username</span>
						<input name="code" type="text" />
					</label>
					<label className="login-label-inputd" htmlFor="password">
						<span>Password</span>
						<input type="password" name="password" />
						<span className="forgot">Forgot password?</span>
					</label>
					<button className="button-submite" type="submit">
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
