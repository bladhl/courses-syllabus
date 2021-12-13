import React from 'react';
import Course from '../../components/Course/Course';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';

function Home() {
	return (
		<div className="container-page">
			<section className="container-home">
				<Navbar />
				<section className="main-home">
					<h1>Home</h1>
					<div className="course-container">
						<Course />
						<Course />
						<Course />
						<Course />
						<Course />
					</div>
				</section>
			</section>
		</div>
	);
}

export default Home;
