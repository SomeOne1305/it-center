import React from 'react';
import Container from '../common/Container';

const CoursesCard = () => {
	return (
		<div className='bg-[#efefef]'>
			<Container>
				<div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-4'>
					{/* <div className='h-[350px] shadow-lg rounded-md p-4 bg-[#eeeeee]'>
						<img src='./icons/frontend.jpg' alt='' />
						<h2 className='text-2xl font-bold'>Web Dasturlash</h2>
						<p className='font-bold text-[14px]'>Kurs davomiyligi 8-10 Oy</p>
					</div>
					<div className='h-[350px] shadow-xl rounded-md p-4'>
						<img src='./icons/computer_learn.jpg' alt='' />
						<h2 className='text-2xl font-bold'>Kompyuter Savotxonligi</h2>
						<p className='font-bold text-[14px]'>Kurs davomiyligi 1-2 Oy</p>
					</div>
					<div className='h-[350px] shadow-xl rounded-md p-4'>
						<img src='./icons/computer_master.jpg' alt='' />
						<h2 className='text-2xl font-bold '>Kompyuter Mutaxasisi</h2>
						<p className='font-bold text-[14px]'>Kurs davomiyligi 1-2 Oy</p>
					</div> */}
					<div className='flex items-center relative p-3 rounded-md bg-[#dadada]'>
						<div className='w-full py-2 m-2'>
							<h2 className='md:text-2xl text-xl font-bold'>Web dasturlash</h2>
							<span className='md:text-xl text-lg hover:underline cursor-default'>
								#Kurs
							</span>
						</div>
						<img
							src='https://cdn-icons-png.flaticon.com/512/1329/1329016.png'
							className='max-w-20 max-h-20 w-full h-full'
							alt=''
						/>
					</div>
					<div className='flex items-center relative p-3 rounded-md bg-[#dadada]'>
						<div className='w-full py-2 m-2'>
							<h2 className='md:text-2xl text-xl font-bold'>
								Kompyuter savodxonligi
							</h2>
							<span className='md:text-xl text-lg hover:underline cursor-default'>
								#Kurs
							</span>
						</div>
						<img
							src='https://cdn-icons-png.flaticon.com/512/5013/5013615.png'
							className='max-w-20 max-h-20 w-full h-full'
							alt=''
						/>
					</div>
					{/* f6f5f4 */}
					<div className='flex items-center relative p-3 rounded-md bg-[#dadada]'>
						<div className='w-full py-2 m-2'>
							<h2 className='md:text-2xl text-lg font-bold'>
								Kompyuter mutaxassisligi
							</h2>
							<span className='text-xl hover:underline cursor-default'>
								#Kurs
							</span>
						</div>
						<img
							src='https://cdn-icons-png.flaticon.com/512/4275/4275122.png'
							className='max-w-20 max-h-20 w-full h-full'
							alt=''
						/>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CoursesCard;
