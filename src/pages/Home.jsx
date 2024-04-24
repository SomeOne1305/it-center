import React from 'react';
import About from '../components/about/About';
import Courses from '../components/course/Courses';
import CoursesCard from '../components/course/Courses.card';
import FormTwo from '../components/form/FormTwo';
import Maps from '../components/maps/Maps';
import HeaderBlock from './../components/header/Header_block';

const Home = () => {
	return (
		<>
			<HeaderBlock />
			<CoursesCard />
			<Courses />
			<Maps />
			<About />
			<FormTwo />
		</>
	);
};

export default Home;
