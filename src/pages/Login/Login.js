import React from 'react';
import classes from './Login.module.scss';

function Login() {
	return (
		<div className={classes.container}>
			<div className={classes.login}>
				<h1>Courses Syllabus</h1>
				<form className={classes['login-form']}>
					<label htmlFor="code">
						<span>Username</span>
						<input name="code" type="text" />
					</label>
					<label className={classes['login-label-inputd']} htmlFor="password">
						<span>Password</span>
						<input type="password" name="password" />
						<span className={classes.forgot}>Forgot password?</span>
					</label>
					<button className={classes['button-submite']} type="submit">
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
