import {
	faBell,
	faCode,
	faComputer,
	faGraduationCap,
	faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

//assets
import Logo from '../assets/logo.svg';

const Manage = () => {
	const tabs = [
		{
			title: "Barcha o'quvchilar",
			link: 'admin/list/on-process',
			icon: faGraduationCap,
		},
		{
			title: 'Web dasturlash',
			link: 'admin/list/web',
			icon: faCode,
		},
		{
			title: 'Kompyuter Savodxonligi',
			link: 'admin/list/computer-learning',
			icon: faKeyboard,
		},
		{
			title: 'Kompyuter mutaxassisligi',
			link: 'computer-repairing',
			icon: faComputer,
		},
		{
			title: "So'rovlar",
			link: 'admin/list/on-register',
			icon: faBell,
		},
	];

	return (
		<div className='w-full'>
			<nav className='w-full fixed top-0 left-0 bg-primary'>
				<div className='container'>
					<div className='flex items-center justify-between'>
						<div className='relative p-1.5'>
							<a href='#'>
								<img
									src={Logo}
									className='max-w-[150px] w-full select-none'
									alt=''
								/>
							</a>
							<span className='absolute top-5 left-[100%] rounded-md py-[2px] px-[3px] bg-green-500 text-white text-xs'>
								admin
							</span>
						</div>
						<div className='text-xl text-white'>Admin profile</div>
					</div>
				</div>
			</nav>
			<div className='w-full'>
				<div className='py-5 my-5'></div>
				<div className='container'>
					<div className='w-full flex items-center border-b border-gray-400'>
						{tabs.map((tab, i) => (
							<NavLink
								key={'Navbar_tab_' + i}
								to={tab.link}
								className='inline-flex items-center py-1.5 px-2.5 rounded-sm text-md border-b-2 hover:border-b-gray-400 hover:bg-gray-200 [&.active]:border-b-green-500 [&.active]:bg-green-200 [&.active]:text-green-500 [&.active]:hover:border-b-green-500 [&.active]:hover:bg-green-200 [&.active]:hover:text-green-500'
							>
								<FontAwesomeIcon icon={tab.icon} className='text-lg mr-1' />
								<span>{tab.title}</span>
							</NavLink>
						))}
					</div>
					<div className='w-full py-2'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Manage;
