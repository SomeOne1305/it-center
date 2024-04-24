import { useLocation } from 'react-router-dom'
import { Link as SLink } from 'react-scroll'

const Siderbar = ({ isOpen }) => {
	const location = useLocation()

	return (
		<div
			className={`w-full h-0 overflow-hidden transition-all lg:hidden duration-300 ${
				isOpen ? 'h-28 sm:h-32' : ''
			}`}
		>
			<div className='container'>
				<div className='flex flex-col'>
					{location.pathname === '/' ? (
						<>
							<SLink
								to='home'
								className='py-1.5 px-2.5 text-sm sm:text-base hover:bg-[#3d42769b] text-white cursor-pointer'
							>
								Bosh sahifa
							</SLink>
							<SLink
								to='courses'
								className='py-1.5 px-2.5 text-sm sm:text-base hover:bg-[#3d42769b] text-white cursor-pointer'
							>
								Kurslar
							</SLink>
							<SLink
								to='about'
								className='py-1.5 px-2.5 text-sm sm:text-base hover:bg-[#3d42769b] text-white cursor-pointer'
							>
								Biz haqimizda
							</SLink>
						</>
					) : (
						<>
							<a
								href='/'
								className='py-1.5 px-2.5 text-sm sm:text-base hover:bg-[#3d42769b] text-white'
							>
								Bosh sahifa
							</a>
							<a
								href='/'
								className='py-1.5 px-2.5 text-sm sm:text-base hover:bg-[#3d42769b] text-white'
							>
								Kurslar
							</a>
							<a
								href='/'
								className='py-1.5 px-2.5 text-sm sm:text-base hover:bg-[#3d42769b] text-white'
							>
								Biz haqimizda
							</a>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Siderbar
