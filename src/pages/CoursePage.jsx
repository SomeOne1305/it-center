import React from 'react';
import { Outlet } from 'react-router-dom';
import FormTwo from '../components/form/FormTwo';

const CoursePage = () => {
	return (
		<>
			<Outlet />
			<FormTwo />
		</>
	);
};

export default CoursePage;
