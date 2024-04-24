const Siderbar = ({ isOpen }) => {
	return (
		<div
			className={`w-full h-0 overflow-hidden transition-all lg:hidden duration-300 ${
				isOpen ? 'h-28 sm:h-32' : ''
			}`}
		>
			<div className='container'>
				<div className='flex flex-col'>
					<a
						href='#'
						className='py-1.5 px-2.5 text-sm sm:text-base hover:bg-[#3d42769b] text-white'
					>
						Bosh sahifa
					</a>
					<a
						href='#courses'
						className='py-1.5 px-2.5 text-sm sm:text-base hover:bg-[#3d42769b] text-white'
					>
						Kurslar
					</a>
					<a
						href='#about'
						className='py-1.5 px-2.5 text-sm sm:text-base hover:bg-[#3d42769b] text-white'
					>
						Biz haqimizda
					</a>
					{/* <div className='inline-flex items-center relative'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/5585/5585856.png'
							className='w-6 h-6 mr-2'
							alt=''
						/>
						<a
							className='text-green-300 font-extrabold pr-3'
							href='tel:+998332575767'
						>
							+998332575767
						</a>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Siderbar;
