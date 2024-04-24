import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import { useMutation } from 'react-query';
import { formService } from '../../services';
import { Container, Input } from '../common';

import toast from 'react-hot-toast';
import 'react-phone-input-2/lib/material.css';
import { LoadingCircle } from '../Loaders';
import './form.css';
const FormTwo = () => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm();

	const { mutateAsync, isLoading } = useMutation('send-form', formData =>
		formService.postForm(formData)
	);

	const onSubmit = async data => {
		const { phone_number, ...last } = data;
		toast.promise(
			mutateAsync({
				...last,
				phone_number: '+' + phone_number,
			}),
			{
				loading: "So'rov jo'natilmoqda...",
				success: "So'rovingiz muvaffaqiyatli jo'natildi.",
				error: 'Xatolik yuz berdi.',
			}
		);
	};
	const [phoneNumber, setPhoneNumber] = React.useState('');

	React.useLayoutEffect(() => {
		setPhoneNumber(phoneNumber.length < 4 ? '+998' : phoneNumber);
	}, [phoneNumber]);
	return (
		<section className='w-full bg-[#efefef]' id='form'>
			<Container>
				<div className='w-full my-4 flex flex-col lg:flex-row items-center justify-center  px-4 lg:bg-hero bg-contain bg-no-repeat bg-[17%]'>
					<div className='text-2xl xs:text-4xl lg:text-5xl w-full  lg:w-1/2 p-5 mr-2 h-auto'>
						<h2 className='font-extrabold text-green-600'>
							<span className='text-[#ABDB06] font-extrabold'>IT-PARK</span>{' '}
							bilan hayotingizni yaxshi tomonga o'zgartiring. Kurslarimizga
							qo'shiling.
						</h2>
					</div>
					<form
						className='w-full lg:w-1/3 rounded-lg bg-white py-2 px-5'
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className='w-full py-3 my-3 text-center'>
							<span className='text-3xl font-bold'>Kursga yoziling!</span>
						</div>
						<div className='w-full flex flex-col gap-3 items-start'>
							<Input
								type={'text'}
								label={'Ism'}
								id='name'
								{...register('name', { required: true })}
							/>
							{errors.name?.type === 'required' && (
								<div className='w-full py-1'>
									<span className='text-red-500 font-[consolas]'>
										Ism yozilishi shart
									</span>
								</div>
							)}
							<Input
								type={'text'}
								label={'Familiya'}
								id='surname'
								{...register('surname', { required: true })}
							/>
							{errors.surname?.type === 'required' && (
								<div className='w-full py-1'>
									<span className='text-red-500 font-[consolas]'>
										Familiya yozilishi shart
									</span>
								</div>
							)}
						</div>
						<div className='flex items-center py-3 my-2'>
							<Controller
								name='phone_number'
								control={control}
								rules={{ required: true }}
								render={({ field: { ref, onChange } }) => (
									<PhoneInput
										value={phoneNumber}
										inputProps={{
											ref,
											required: true,
											autoFocus: true,
										}}
										onChange={val => {
											setPhoneNumber(val);
											onChange(phoneNumber);
										}}
										onlyCountries={['uz']}
										country='uz'
										inputStyle={{ width: '100%' }}
										autoFormat={true}
										placeholder='+998 XX XXX-XX-XX'
										specialLabel='Telefon raqam'
										masks={{
											uz: '(..) ...-..-..',
										}}
									/>
								)}
							/>
							{errors.phone_number ? console.log(errors) : ''}
						</div>
						<select
							name='courses'
							className='w-full select-none rounded-md border border-[#bfc4ca] outline-none py-2 text-sm sm:text-base'
							{...register('course', { required: true })}
						>
							<option value='web'>Web dasturlash</option>
							<option value='computer-learning'>Kompyuter savodxonligi</option>
							<option value='computer-repairing'>
								Kompyuter mutaxassisligi
							</option>
						</select>
						<button
							className='w-full flex items-center justify-center bg-green-500 text-white mt-4 text-xs xs:text-sm sm:text-md active:bg-green-600  md:text-lg text-center py-2 rounded-md my-3'
							type='submit'
							disabled={isLoading}
						>
							{isLoading ? (
								<>
									<LoadingCircle className='text-white' />{' '}
									<span className='ml-1 text-white'>Jo'natilmoqda...</span>
								</>
							) : (
								"Jo'natish"
							)}
						</button>
					</form>
				</div>
			</Container>
		</section>
	);
};

export default FormTwo;
