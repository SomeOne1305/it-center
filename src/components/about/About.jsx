import React from 'react'
import { Element } from 'react-scroll'
import { Container } from '../common'

const About = () => {
	return (
		<Element name='about' className='w-full py-5 bg-[#efefef]'>
			<Container>
				<div className='w-full'>
					<h1 className='text-4xl my-3 mt-5 py-3 text-green-500 font-bold text-center uppercase'>
						Bizning Jamoa
					</h1>
					<div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-5 py-3'>
						<div className='flex flex-col items-center'>
							<div className='size-60'>
								<img
									src='https://cdn3d.iconscout.com/3d/premium/thumb/software-developer-10961397-8772473.png?f=webp'
									className='w-full h-full object-cover rounded-full '
									alt=''
								/>
							</div>
							<div className='w-full text-center py-2 my-2'>
								<h2 className='text-xl font-bold'>Soatov Xurshid</h2>
								<span className='text-lg text-gray-500'>Web dasturchi</span>
							</div>
						</div>
						<div className='flex flex-col items-center'>
							<div className='size-60'>
								<img
									src='https://cdn3d.iconscout.com/3d/premium/thumb/project-manager-10961393-8772469.png'
									className='w-full h-full object-cover rounded-full '
									alt=''
								/>
							</div>
							<div className='w-full text-center py-2 my-2'>
								<h2 className='text-xl font-bold'>Choriyev Aziz</h2>
								<span className='text-lg text-gray-500'>Proyekt Menejer</span>
							</div>
						</div>
						<div className='flex flex-col items-center'>
							<div className='size-60'>
								<img
									src='https://cdn3d.iconscout.com/3d/premium/thumb/game-developer-11409501-9189371.png?f=webp'
									className='w-full h-full object-cover rounded-full '
									alt=''
								/>
							</div>
							<div className='w-full text-center py-2 my-2'>
								<h2 className='text-xl font-bold'>Qurbonnazarov Baxtiyor</h2>
								<span className='text-lg text-gray-500'>Web dasturchi</span>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<div className='w-full  border flex justify-center flex-col md:flex-row bg-green-500 items-center gap-10'>
				<img className='h-full' src='./man.png' alt='' />
				<div className='p-2 text-center'>
					<h2 className='font-bold text-3xl text-white py-5'>
						Biz A'lo bilim olish tarafdorimiz!
					</h2>
					<p className='text-white font-bold indent-2'>
						Bizda hamisha guruxga 10-12 ta odam qabul qilamiz shu bilan biz
						ularga yuzma-yuz bo'lgan xolda ularga yaxshi va sifatli ta'lim
						berishga xarakat qilamiz!{' '}
					</p>
				</div>
			</div>
		</Element>
	)
}

export default About
