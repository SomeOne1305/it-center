import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { LoadingCircle } from '../components/Loaders';
import { Input } from '../components/common';
import { Context } from '../context';

const Login = () => {
	const { setModalOpen } = useContext(Context);

	const admin = import.meta.env.VITE_ADMIN_USERNAME;
	const password = import.meta.env.VITE_ADMIN_PASS;

	const [username, setUsername] = useState('');
	const [pass, setPass] = useState('');
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const navigate = useNavigate();

	const handleLogin = () => {
		return new Promise((resolve, reject) => {
			if (username === admin && pass === password) {
				Cookies.set(
					'access',
					new TextEncoder().encode({
						message: 'Access verified',
						date: new Date(),
					}),
					{
						expires: 604800,
						secure: true,
					}
				);
				resolve();
			} else {
				reject(new Error('Invalid username or password'));
				setLoading(false);
			}
		});
	};
	const onSucces = () => {
		navigate('admin/list/on-process');
		setLoading(false);
		setIsError(false);
		setModalOpen(false);
	};
	const submit = async e => {
		e.preventDefault();
		try {
			setLoading(true);
			toast
				.promise(handleLogin(), {
					loading: "So'rov jo'natilmoqda...",
					success: () => {
						navigate('admin/list/on-process');
						return "Muvaffaqiyatli o'tkazildi.";
					},
					error: () => {
						setIsError(true);
						return "Kirish ma'lumotlarida xatolik.";
					},
				})
				.then(() => onSucces());
		} catch (error) {
			setIsError(true);
			setLoading(false);
		}
	};
	return (
		<section className='bg-[#000000c9] fixed top-0 left-0 h-screen w-screen z-50'>
			<div className='container'>
				<form
					onSubmit={submit}
					className='max-w-screen-xs bg-white rounded-lg p-6 sm:p-10 flex flex-col relative items-center mx-auto mt-[10%]'
				>
					<div className='p-1 cursor-pointer absolute bottom-[110%] left-[110%]'>
						<FontAwesomeIcon
							icon={faClose}
							onClick={() => setModalOpen(false)}
							className='text-2xl text-white hover:text-gray-100'
						/>
					</div>
					<div className='inline-flex items-center py-3 my-3 select-none'>
						<img
							src='https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1689243180_kartin-papik-pro-p-kartinki-it-park-69.png'
							className='size-12 mr-2'
							alt=''
						/>
						<h2 className='text-2xl font-bold'>IT PARK</h2>
					</div>
					<Input
						type='text'
						label='Username'
						id='username'
						value={username}
						required={true}
						onChange={e => setUsername(e.target.value)}
					/>
					<div className='py-2'></div>
					<Input
						type='password'
						label='Password'
						id='password'
						value={pass}
						required={true}
						onChange={e => setPass(e.target.value)}
					/>
					{isError && (
						<span className='my-2 text-base text-red-500'>
							Username yoki parol xato.
						</span>
					)}
					<button
						className='w-full rounded-md mt-4 py-2 text-base md:text-lg bg-green-500 text-white flex items-center justify-center'
						type='submit'
						disabled={loading}
					>
						{loading ? (
							<>
								<LoadingCircle className='text-white' />{' '}
								<span className='ml-1 text-white'>Jo'natilmoqda...</span>
							</>
						) : (
							'Kirish'
						)}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
