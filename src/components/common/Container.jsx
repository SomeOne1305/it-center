import React from 'react';

const Container = ({ children, ...rest }) => {
	return (
		<div className='container py-1' {...rest}>
			{children}
		</div>
	);
};

export default Container;
