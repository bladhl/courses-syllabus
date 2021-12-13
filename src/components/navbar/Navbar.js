import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="nav-logo">
				<NavLink to="/">SYLLABUS</NavLink>
			</div>
			<div className="nav-links">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/">Home</NavLink>
			</div>
		</nav>
	);
}
