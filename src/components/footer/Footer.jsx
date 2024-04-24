import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from '../common';

const Footer = () => {
	return (
		<div className='w-full py-10 bg-[#222840]'>
			<Container>
				<div className='h-full  flex flex-col lg:justify-between lg:flex-row items-start md:items-center px-5 py-6'>
					<div className='flex justify-center gap-5  flex-col  h-full'>
						<h2 className='text-3xl uppercase text-green-500'>
							O'quv Kurslarimiz:
						</h2>
						<h2 className='flex text-xl items-center text-white'>
							<img
								className='w-[32px] mr-4'
								src='./courses_icons/coding/html.svg'
								alt=''
							/>
							Web Dasturlash
						</h2>
						<h2 className='flex text-xl items-center text-white'>
							<img
								className='w-[32px] mr-4'
								src='./courses_icons/learn/keyboard.svg'
								alt=''
							/>
							Komyuter Savotxonligi
						</h2>
						<h2 className='flex text-xl items-center text-white'>
							<img
								className='w-[32px] mr-4'
								src='./courses_icons/master/computer.svg'
								alt=''
							/>
							Komyuter Mutaxasisi
						</h2>
					</div>
					<div className='flex flex-col items-start gap-2'>
						<img className='w-[250px] mx-auto' src='./icons/logo.svg' alt='' />
						<div className='text-center'>
							<h2 className='text-xl text-white'>
								O'quv Markaz "IT Center Qumqo'rg'on"
							</h2>
							<p className='text-gray-500 p-2'>
								O'zbekiston Shox Ko'chasi 1-uy
							</p>
						</div>
						<div className='inline-flex items-center'>
							<FontAwesomeIcon
								icon={faPhone}
								className='text-xl text-green-500 mr-2'
							/>
							<p className='text-white text-lg'>Tel: +998 33 257-57-67</p>
						</div>
						<div className='inline-flex items-center'>
							<FontAwesomeIcon
								icon={faTelegramPlane}
								className='text-xl text-sky-500 mr-2'
							/>
							<p className='text-white text-lg'>Telegram: @windoxas</p>
						</div>
						<div className='inline-flex items-center'>
							<FontAwesomeIcon
								icon={faEnvelope}
								className='text-xl text-yellow-500 mr-2'
							/>
							<p className='text-white text-lg'>Email: windoxas@gmail.com</p>
						</div>
					</div>
				</div>
			</Container>
			<p className='text-center  text-white'>
				IT Center Qumqo'rg'on: {new Date().getFullYear()}
			</p>
		</div>
	);
};

export default Footer;
