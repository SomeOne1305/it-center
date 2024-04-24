import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/not-found.svg';

const NotFoundPage = () => {
	return (
		<div className='w-full xl:pt-28 pb-6 h-screen flex flex-col items-center justify-center'>
			<img
				className='w-1/2 md:1/3 lg:w-1/4 text-blue-600'
				src={NotFoundImage}
			/>
			<div className='flex flex-col items-center justify-center py-5'>
				<p className='text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12'>
					Page Not Found
				</p>
				<p className='md:text-lg lg:text-xl text-gray-600 mt-8'>
					Kechirasiz, Siz qidirayotgan sahifa topilmadi.
				</p>
				<Link
					to={'/'}
					className='flex items-center space-x-2 bg-green-500 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150'
					title='Return Home'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fill-rule='evenodd'
							d='M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z'
							clip-rule='evenodd'
						></path>
					</svg>
					<span>Bosh sahifaga qaytish</span>
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
