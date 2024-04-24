import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from '../common/Container';

const Maps = () => {
	return (
		<div className='w-full bg-[#efefef]'>
			<Container>
				<div className='flex flex-col xl:flex-row items-center py-2'>
					<div className='w-full xl:w-1/2 flex items-center justify-center'>
						<img
							src='https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1689243180_kartin-papik-pro-p-kartinki-it-park-69.png'
							className='size-24 md:size-40'
							alt=''
						/>
						<div className='mx-4'>
							<h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold '>
								IT PARK
							</h1>
							<br />
							<h2 className='text-3xl sm:text-4xl lg:text-6xl font-bold bg-green-500 text-white rounded-md p-1 '>
								KUMKURGAN
							</h2>
						</div>
					</div>
					<div className='w-full xl:w-1/2 py-2'>
						<p className='text-lg indent-2'>
							Qumqo‘rg‘on shahrining qoq markazida joylashgan IT Park markazi
							innovatsiyalar va aloqalar mayoqchasi bo‘lib turibdi. Shaharning
							jo‘shqin ko‘chalari va jo‘shqin muhitida joylashgan bizning markaz
							texnologiya ixlosmandlari, tadbirkorlar va biznes vakillari uchun
							gavjum markaz bo‘lib xizmat qiladi. Eng ilg'or ob'ektlar va ilg'or
							infratuzilmaga ega bo'lgan IT Park hamkorlik, ijodkorlik va
							rivojlanish uchun qulay muhit yaratadi.
						</p>
					</div>
				</div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.6449849517658!2d67.58057756002127!3d37.83704855199938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b559ae078974b3%3A0x80261b021e468e13!2sUztelecom!5e1!3m2!1suz!2s!4v1711990400687!5m2!1suz!2s'
					className='w-full h-[60vh] mt-5 select-none'
					allowFullScreen=''
					loading='lazy'
				></iframe>
				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 my-2 py-2'>
					<div className='p-2'>
						<h3 className='text-lg font-bold uppercase'>
							<FontAwesomeIcon
								icon={faLocationDot}
								className='text-xl mr-2 text-red-500'
							/>
							Bizning manzil
						</h3>
						<p className='pl-5 text-gray-400'>
							Qumqo'rg'on tumani "Bog'aro" mahallasi O'zbekiston Shox Ko'chasi
							1-uy
						</p>
					</div>
					<div className='p-2'>
						<h3 className='text-lg font-bold uppercase'>
							<FontAwesomeIcon
								icon={faPhone}
								className='text-xl mr-2 text-green-500'
							/>
							Bog'lanish uchun ma'lumot
						</h3>
						<p className='pl-7 text-gray-400 inline-flex flex-col items-end'>
							<span className=''>Telefon: +998 (33) 257-57-67</span>
							<span className=''>+998 (77) 442-44-72</span>
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Maps;
