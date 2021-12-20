import React from 'react';
import Course from '../../components/Course/Course';
import Navbar from '../../components/navbar/Navbar';
import classes from './Home.module.scss';

function Home() {
	return (
		<div className={classes['container-page']}>
			<section className={classes['container-home']}>
				<Navbar />
				<section className={classes['main-home']}>
					<h1>Courses</h1>
					<div className={classes['course-container']}>
						{/* <div className={classes.item}>Osdla1</div>
						<div className={classes.item}>Osdla2</div> */}
						<Course />
						<Course />
						<Course />
						<Course />
						{/* <Course />
						<Course />
						<Course />
						<Course />
						<Course />
						<Course />
						<Course />
						<Course />
						<Course /> */}
					</div>
				</section>
			</section>
		</div>
	);
}

export default Home;
