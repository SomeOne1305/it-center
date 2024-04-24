import { Squash as Hamburger } from 'hamburger-react';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { Context } from '../../context';
import { Container } from '../common';
import Siderbar from './Siderbar';

const Header = () => {
	const [open, setOpen] = React.useState(false);
	const { modalOpen } = useContext(Context);
	const close = () => {
		setOpen(false);
	};
	useEffect(() => {
		if (modalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [modalOpen]);
	return (
		<div className='w-full  bg-primary fixed top-0 left-0 z-50 xl:py-2'>
			<Container>
				<div className='flex justify-between items-center h-full'>
					<div className='flex items-center h-full'>
						<Link to={'/'}>
							<img
								className='max-w-[150px] w-full select-none'
								src={Logo}
								alt=''
							/>
						</Link>
					</div>

					<div className='flex justify-evenly items-center gap-5 lg:gap-10 text-white max-lg:hidden'>
						<a
							href={window.location.pathname.includes('course') ? '/#' : '#'}
							className='hover:text-green-500 transition-colors duration-75'
						>
							Bosh Sahifa
						</a>
						<a
							href={
								window.location.pathname.includes('course')
									? '/#courses'
									: '#courses'
							}
							className='hover:text-green-500 transition-colors duration-75'
						>
							Kurslar
						</a>
						<a
							href={
								window.location.pathname.includes('course')
									? '/#about'
									: '#about'
							}
							className='hover:text-green-500 transition-colors duration-75'
						>
							Biz Haqimizda
						</a>
					</div>
					<div className='inline-flex items-center'>
						<a
							className='inline-flex items-center relative text-green-300 font-extrabold pr-3'
							href='tel:+998332575767'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/5585/5585856.png'
								className='w-3 h-3 sm:w-6 sm:h-6 mr-2'
								alt=''
							/>
							<span className='lg:inline-block hidden'> +998332575767</span>
						</a>
						<button className='px-2.5 py-1.5 text-xs md:text-md lg:text-lg text-white bg-green-500 rounded-lg'>
							{' '}
							<a className='whitespace-nowrap' href='#form'>
								Kursga yozilish
							</a>
						</button>
						<div className='lg:hidden'>
							<Hamburger
								color='white'
								size={22}
								toggled={open}
								toggle={setOpen}
							/>
						</div>
					</div>
				</div>
			</Container>
			<Siderbar isOpen={open} close={close} />
		</div>
	);
};

export default Header;
