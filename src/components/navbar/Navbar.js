import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.scss';

export default function Navbar() {
	return (
		<nav className={classes.navbar}>
			<div className={classes['nav-logo']}>
				<NavLink to="/">SYLLABUS</NavLink>
			</div>
			<div className={classes['nav-links']}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/">Courses</NavLink>
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/">Logout</NavLink>
			</div>
		</nav>
	);
}
