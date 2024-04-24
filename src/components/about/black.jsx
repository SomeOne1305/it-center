import React from 'react';

const Black = () => {
	return (
		<div>
			<div className='w-full grid grid-cols-3 items-center gap-6 px-3'>
				<div className='flex flex-col rounded-md overflow-hidden'>
					<div className='flex flex-col p-2'>
						<div className='w-full max-h-80'>
							<img
								src='https://img.freepik.com/free-photo/portrait-african-american-man_23-2149072178.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712620800&semt=ais'
								className='w-full h-full object-cover rounded-md'
								alt=''
							/>
						</div>
						<div className='py-2'>
							<div className='flex items-center justify-between'>
								<h3 className='text-xl font-bold'>Jone McMillian</h3>
								<div className='inline-flex gap-3'>
									<div className='px-1.5 py-1 rounded-sm bg-gray-300'>
										<FontAwesomeIcon
											icon={faTelegram}
											className='text-xl text-sky-500'
										/>
									</div>
									<div className='px-1.5 py-1 rounded-sm bg-gray-300'>
										<FontAwesomeIcon
											icon={faTelegram}
											className='text-xl text-sky-500'
										/>
									</div>
									<div className='px-1.5 py-1 rounded-sm bg-gray-300'>
										<FontAwesomeIcon
											icon={faTelegram}
											className='text-xl text-sky-500'
										/>
									</div>
								</div>
							</div>
							<span className='text-lg'>Web developer</span>
						</div>
					</div>
					<div className='w-full h-1.5 bg-green-500'></div>
				</div>
			</div>

			{/* Second */}

			<div className='grid grid-cols-3 p-10 my-10 gap-10'>
				<div className='h-[300px] w-[300px] '>
					<img
						className='rounded-full object-cover h-[300px] w-[300px]'
						src='./me.jpg'
						alt=''
					/>
					<div className=' flex items-center flex-col p-4 gap-2'>
						<h2 className='text-[20px] font-extrabold'>Soatov Xurshid</h2>
						<p className='text-gray-500'>Frontend Dasturchi</p>
					</div>
				</div>
				<div className='h-[300px] w-[300px] '>
					<img
						className='rounded-full object-cover h-[300px] w-[300px]'
						src='./me.jpg'
						alt=''
					/>
					<div className=' flex items-center flex-col p-4 gap-2'>
						<h2 className='text-[20px] font-extrabold'>Choriev Azizi</h2>
						<p className='text-gray-500'>Proekt Menejer</p>
					</div>
				</div>
				<div className='h-[300px] w-[300px] '>
					<img
						className='rounded-full object-cover h-[300px] w-[300px]'
						src='./me.jpg'
						alt=''
					/>
					<div className=' flex items-center flex-col p-4 gap-2'>
						<h2 className='text-[20px] font-extrabold'>
							Qurbonnazorov Baxtiyor
						</h2>
						<p className='text-gray-500'>Web dasturchi</p>
					</div>
				</div>
			</div>

			<div className='w-full flex items-center justify-evenly mt-5 py-4'>
				<div className='max-w-80 cursor-pointer group w-[100%] flex flex-col relative max-h-96 h-[100%] rounded-tl-3xl rounded-br-3xl bg-[#8e8e8e] overflow-hidden shadow-black shadow-sm'>
					<div className='w-full h-full'>
						<img
							src='https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_640.jpg'
							className='w-full h-full object-cover'
							alt=''
						/>
					</div>
					<div className='w-full h-full flex items-end p-2 absolute top-0 left-0 text-white bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-100 transition-opacity'>
						<div className='mt-auto translate-y-36 group-hover:translate-y-0 transition-transform delay-100'>
							<h3 className='text-xl font-bold'>James McCarthy</h3>
							<span className='mt-2 text-lg'>Web Developer</span>
						</div>
					</div>
					<div className='absolute top-0 right-0 p-1 pr-0 pt-0 inline-flex items-center flex-col'>
						<div className='p-1 inline-flex items-center bg-white'>
							<FontAwesomeIcon
								icon={faTelegram}
								className='text-2xl text-sky-400 hover:text-sky-500'
							/>
							<span className='text-black text-lg ml-1'>Telegram</span>
						</div>
					</div>
				</div>
				<div className='max-w-80 cursor-pointer group w-[100%] flex flex-col relative max-h-96 h-[100%] rounded-tl-3xl rounded-br-3xl bg-[#8e8e8e] overflow-hidden shadow-black shadow-sm'>
					<div className='w-full h-full'>
						<img
							src='https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_640.jpg'
							className='w-full h-full object-cover'
							alt=''
						/>
					</div>
					<div className='w-full h-full flex items-end p-2 absolute top-0 left-0 text-white bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-100 transition-opacity'>
						<div className='mt-auto translate-y-36 group-hover:translate-y-0 transition-transform delay-100'>
							<h3 className='text-xl font-bold'>James McCarthy</h3>
							<span className='mt-2 text-lg'>Web Developer</span>
						</div>
					</div>
					<div className='absolute top-0 right-0 p-1 pr-0 pt-0 inline-flex items-center flex-col'>
						<div className='p-1 inline-flex items-center bg-white'>
							<FontAwesomeIcon
								icon={faTelegram}
								className='text-2xl text-sky-400 hover:text-sky-500'
							/>
							<span className='text-black text-lg ml-1'>Telegram</span>
						</div>
					</div>
				</div>
				<div className='max-w-80 cursor-pointer group w-[100%] flex flex-col relative max-h-96 h-[100%] rounded-tl-3xl rounded-br-3xl bg-[#8e8e8e] overflow-hidden shadow-black shadow-sm'>
					<div className='w-full h-full'>
						<img
							src='https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_640.jpg'
							className='w-full h-full object-cover'
							alt=''
						/>
					</div>
					<div className='w-full h-full flex items-end p-2 absolute top-0 left-0 text-white bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-100 transition-opacity'>
						<div className='mt-auto translate-y-36 group-hover:translate-y-0 transition-transform delay-100'>
							<h3 className='text-xl font-bold'>James McCarthy</h3>
							<span className='mt-2 text-lg'>Web Developer</span>
						</div>
					</div>
					<div className='absolute top-0 right-0 p-1 pr-0 pt-0 inline-flex items-center flex-col'>
						<div className='p-1 inline-flex items-center bg-white'>
							<FontAwesomeIcon
								icon={faTelegram}
								className='text-2xl text-sky-400 hover:text-sky-500'
							/>
							<span className='text-black text-lg ml-1'>Telegram</span>
						</div>
					</div>
				</div>
				<div className='max-w-80 cursor-pointer group w-[100%] flex flex-col relative max-h-96 h-[100%] rounded-tl-3xl rounded-br-3xl bg-[#8e8e8e] overflow-hidden shadow-black shadow-sm'>
					<div className='w-full h-full'>
						<img
							src='https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_640.jpg'
							className='w-full h-full object-cover'
							alt=''
						/>
					</div>
					<div className='w-full h-full flex items-end p-2 absolute top-0 left-0 text-white bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-100 transition-opacity'>
						<div className='mt-auto translate-y-36 group-hover:translate-y-0 transition-transform delay-100'>
							<h3 className='text-xl font-bold'>James McCarthy</h3>
							<span className='mt-2 text-lg'>Web Developer</span>
						</div>
					</div>
					<div className='absolute top-0 right-0 p-1 pr-0 pt-0 inline-flex items-center flex-col'>
						<div className='p-1 inline-flex items-center bg-white'>
							<FontAwesomeIcon
								icon={faTelegram}
								className='text-2xl text-sky-400 hover:text-sky-500'
							/>
							<span className='text-black text-lg ml-1'>Telegram</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Black;
