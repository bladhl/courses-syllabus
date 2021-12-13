import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';

function Home() {
	return (
		<div className="container-page">
			<section className="container-home">
				<Navbar />
				<section className="main-home">
					<p>home page</p>
					<h1>Home</h1>
				</section>
			</section>
		</div>
	);
}

export default Home;
