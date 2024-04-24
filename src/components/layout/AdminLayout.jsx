import {
	faBell,
	faCode,
	faComputer,
	faGraduationCap,
	faKeyboard,
	faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';

//assets
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import Logo from '../../assets/logo.svg';

const AdminLayout = () => {
	const tabs = [
		{
			title: "Barcha o'quvchilar",
			link: 'list/on-process',
			icon: faGraduationCap,
		},
		{
			title: 'Web dasturlash',
			link: 'list/web',
			icon: faCode,
		},
		{
			title: 'Kompyuter Savodxonligi',
			link: 'list/computer-learning',
			icon: faKeyboard,
		},
		{
			title: 'Kompyuter mutaxassisligi',
			link: 'list/computer-repairing',
			icon: faComputer,
		},
		{
			title: "So'rovlar",
			link: 'list/on-register',
			icon: faBell,
		},
	];
	const navigate = useNavigate();
	const cook = Cookies.get('access');
	useEffect(() => {
		if (!cook) {
			navigate('/');
		}
	}, [cook]);
	const logout = () => {
		Cookies.remove('access');
		window.location.reload();
		navigate('/');
	};
	return (
		<div className='w-full'>
			<nav className='w-full fixed top-0 left-0 bg-primary'>
				<div className='container'>
					<div className='flex items-center justify-between'>
						<div className='relative p-1.5'>
							<Link to={'/'}>
								<img
									src={Logo}
									className='max-w-[150px] w-full select-none'
									alt=''
								/>
							</Link>
							<span className='absolute top-5 left-[100%] rounded-md py-[2px] px-[3px] bg-green-500 text-white text-xs'>
								admin
							</span>
						</div>
						<div className='inline-flex flex-col'>
							<div
								className='inline-flex items-center text-red-500 text-sm mt-1 cursor-pointer'
								onClick={logout}
							>
								<FontAwesomeIcon
									icon={faRightFromBracket}
									className='text-lg text-red-500 mr-1'
								/>
								<span className='hover:underline'>Tizimdan chiqish</span>
							</div>
						</div>
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
								className={({ isActive }) =>
									`inline-flex ${
										isActive ? 'active' : ''
									}  items-center py-1.5 px-2.5 rounded-sm text-md border-b-2 hover:border-b-gray-400 hover:bg-gray-200 [&.active]:border-b-green-500 [&.active]:bg-green-200 [&.active]:text-green-500 [&.active]:hover:border-b-green-500 [&.active]:hover:bg-green-200 [&.active]:hover:text-green-500`
								}
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

export default AdminLayout;
