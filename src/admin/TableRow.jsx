import {
	faCircleCheck,
	faCircleXmark,
	faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { Context } from '../context';
import { StudentsService } from '../services';

const TableRow = ({
	name,
	surname,
	phoneNumber,
	id,
	param,
	date,
	course,
	reGet,
}) => {
	const { setIds, ids } = React.useContext(Context);

	const [isOpened, setIsOpened] = React.useState([]);

	const validDate = new Date(date).toLocaleDateString();
	const identifyCourse = string => {
		switch (string) {
			case 'web':
				return 'Web dasturlash';
			case 'computer-learning':
				return 'Kompyuter savodxonligi';
			case 'computer-repairing':
				return 'Kompyuter mutaxassisligi';
		}
	};

	const accept = useMutation(['accept-req', param], userId =>
		StudentsService.acceptUser(userId)
	);
	const cancel = useMutation(['cancel-req', param], userId =>
		StudentsService.cancelUser(userId)
	);
	const deleteStudent = useMutation(['delete-student', param], userId =>
		StudentsService.deleteStudent(userId)
	);
	const acceptUser = () => {
		toast
			.promise(accept.mutateAsync(id), {
				loading: "So'rov jo'natilmoqda...",
				success: 'Qabul qilindi.',
				error: 'Xatolik yuz berdi.',
			})
			.then(() => reGet());
	};

	const cancelReq = () => {
		toast
			.promise(cancel.mutateAsync(id), {
				loading: "So'rov jo'natilmoqda...",
				success: "Muvaffaqiyatli o'chirildi.",
				error: 'Xatolik yuz berdi.',
			})
			.then(() => reGet());
	};

	const deleteUser = () => {
		toast
			.promise(deleteStudent.mutateAsync(id), {
				loading: "So'rov jo'natilmoqda...",
				success: "Muvaffaqiyatli o'chirildi.",
				error: 'Xatolik yuz berdi.',
			})
			.then(() => reGet());
	};

	return (
		<tr
			className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-l-4 border-transparent rounded-sm ${
				ids.some(e => e === id) ? 'border-l-red-500' : ''
			} mt-[1px]`}
		>
			<td className='px-6 py-4'>
				<input
					type='checkbox'
					className='appearance-none hidden peer'
					id={'checkbox' + id}
					onChange={e =>
						e.target.checked && !ids.some(e => e === id)
							? setIds(prev => [...prev, id])
							: ''
					}
					onClick={e =>
						e.target.checked === false
							? setIds(prev => prev.filter(l => l !== id))
							: ''
					}
					checked={ids.some(e => e === id)}
				/>
				<label
					htmlFor={'checkbox' + id}
					className={`flex items-center justify-center relative cursor-pointer size-5 border border-gray-400 rounded-md  bg-gray-100 peer-checked:border-red-500 peer-checked:ring-red-500 ring-2 ring-offset-2 ring-transparent peer-checked:bg-red-400 peer-checked:before:bg-tick before:bg-center before:bg-no-repeat before:bg-contain  before:z-20	 before:w-full before:h-full before:absolute before:top-0 before:left-0 peer-checked:before:opacity-100 overflow-hidden`}
				></label>
			</td>
			<td className='px-6 py-4'>{name}</td>
			<td className='px-6 py-4'>{surname}</td>
			<td className='px-6 py-4'>{validDate}</td>
			<td className='px-6 py-4'>{phoneNumber}</td>
			<td className='px-6 py-4'>
				<span className='py-1 px-1.5 bg-green-500 text-white rounded-xl whitespace-nowrap'>
					{identifyCourse(course)}
				</span>
			</td>
			<td>
				<div
					className='cursor-pointer size-9 rounded-full relative hover:bg-gray-300 transition-colors inline-flex items-center justify-center bg-opacity-60 active:bg-opacity-100'
					onClick={() =>
						isOpened.some(e => e === id)
							? setIsOpened(prev => prev.filter(e => e !== id))
							: setIsOpened(prev => [...prev, id])
					}
				>
					<FontAwesomeIcon icon={faEllipsisVertical} className='text-xl' />

					<div
						className={`z-10 absolute top-[100%] right-0 hidden ${
							isOpened.some(e => e === id) ? 'open' : ''
						} [&.open]:inline-flex flex-col items-center p-1 rounded-md bg-white shadow`}
					>
						{param === 'on-register' ? (
							<>
								<div
									className='flex items-center cursor-pointer py-1.5 px-2.5  rounded-md hover:bg-green-200 text-green-500'
									onClick={acceptUser}
								>
									<FontAwesomeIcon
										icon={faCircleCheck}
										className='text-xl mr-1'
									/>
									<span className='text-md whitespace-nowrap'>
										Qabul qilish
									</span>
								</div>
								<div
									className='flex items-center cursor-pointer py-1.5 px-2.5 rounded-md hover:bg-red-200 text-red-500'
									onClick={cancelReq}
								>
									<FontAwesomeIcon
										icon={faCircleXmark}
										className='text-xl mr-1'
									/>
									<span className='text-md whitespace-nowrap'>
										Bekor qilish
									</span>
								</div>
							</>
						) : (
							<div
								className='flex items-center cursor-pointer py-1.5 px-2.5 rounded-md hover:bg-red-200 text-red-500'
								onClick={deleteUser}
							>
								<FontAwesomeIcon
									icon={faCircleXmark}
									className='text-xl mr-1'
								/>
								<span className='text-md whitespace-nowrap'>O'chirish</span>
							</div>
						)}
					</div>
				</div>
			</td>
		</tr>
	);
};

export default TableRow;
