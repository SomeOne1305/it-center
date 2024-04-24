import React from 'react';
import LoadingCircle from './LoadingCircle';

const Loader = () => {
	return (
		<div className='w-full flex items-center justify-center  px-2 py-1'>
			<LoadingCircle className={'text-blue-500'} />
			<span className='text-lg font-bold'>Loading...</span>
		</div>
	);
};

export default Loader;
