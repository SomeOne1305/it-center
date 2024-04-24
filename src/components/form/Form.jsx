import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../common';

const Form = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async data => {
		console.log(data);
		await axios.post(`https://660c1e9e3a0766e85dbd767c.mockapi.io/users`, {
			last_name: data.last_name,
			first_name: data.first_name,
			phone: data.phone,
			course: data.course,
		});
		reset();
	};

	return (
		<div className='w-full h-[500px]  py-5' id='form'>
			<Container>
				<div className='flex flex-col gap-5 form'>
					<h2 className='text-3xl text-center'>
						Kursga yozilish uchun formni to'ldiring!
					</h2>
					<form className='form gap-5' onSubmit={handleSubmit(onSubmit)}>
						<input
							defaultValue=''
							placeholder='Familya'
							{...register('last_name', { required: true })}
						/>
						<input
							defaultValue=''
							placeholder='Ism'
							{...register('first_name', { required: true })}
						/>
						<input
							defaultValue=''
							placeholder='+998 (XX) XXX-XX-XX'
							{...register('phone', { required: true })}
						/>

						<select {...register('course', { required: true })}>
							<option value='Frontend'>Web Dasturlash</option>
							<option value='compyuter_learn'>Kompyuter Savotxonligi</option>
							<option value='computer_master'>Kompyuter Mutaxasisi</option>
						</select>

						{errors.exampleRequired && <span>This field is required</span>}

						<input
							className='bg-green-500 text-white border-none cursor-pointer'
							type='submit'
							value={"Jo'natish"}
						/>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default Form;
