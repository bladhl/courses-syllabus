import React from 'react';
import classes from './Course.module.scss';

function Course() {
	return (
		<div className={classes.course}>
			<h3>ALGORITMOS Y ESTRUCTURAS DE DATOS</h3>
			<div className={classes['course-detail']}>
				<span>credito: 4</span>
				<span>catgoria: EEE</span>
			</div>
		</div>
	);
}

export default Course;
