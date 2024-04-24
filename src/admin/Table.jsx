import React from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from '../context';

import { faCircleXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { StudentsService } from '../services';

const Table = () => {
	const { ids, setIds, setSelectAll, selectAll, deletePath } =
		React.useContext(Context);

	const deleteMany = useMutation(['delete-many', deletePath], Ids =>
		StudentsService.deleteMany(deletePath, Ids)
	);

	const deleteManyData = () => {
		toast
			.promise(deleteMany.mutateAsync(ids), {
				loading: "So'rov jo'natilmoqda...",
				success: "Muvaffaqiyatli o'chirildi.",
				error: 'Xatolik yuz berdi.',
			})
			.then(() => setIds([]));
	};

	return (
		<div className='relative overflow-x-auto overflow-y-visible sm:rounded-lg'>
			<div className='w-full py-3 flex items-center justify-between'>
				<h2 className='text-xl font-bold my-3'>Content</h2>
				<div className='py-1 inline-flex items-center'>
					{ids.length > 0 && (
						<>
							<button
								onClick={() => setIds([])}
								className='py-1.5 px-2.5 rounded-md border border-gray-400 hover:bg-gray-200 inline-flex items-center mr-2'
							>
								<FontAwesomeIcon
									icon={faCircleXmark}
									className='text-lg mr-1'
								/>
								Bekor qilish
							</button>
							<button
								className='py-1.5 px-2.5 rounded-md bg-red-500 text-white inline-flex items-center bg-opacity-90 hover:bg-opacity-100'
								onClick={deleteManyData}
								disabled={deleteMany.isLoading}
							>
								<FontAwesomeIcon icon={faTrash} className='text-lg mr-1' />
								O'chirish {ids.length > 0 ? ` (${ids.length})` : ''}
							</button>
						</>
					)}
				</div>
			</div>

			<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
				<thead className='text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400'>
					<tr className='border-l-4'>
						<th scope='col' className='px-6 py-3'>
							<input
								type='checkbox'
								className='appearance-none hidden peer'
								id='checkbox-all'
								onChange={e => {
									setSelectAll(e.target.checked);
								}}
								checked={selectAll && ids.length === 0}
							/>
							<label
								htmlFor='checkbox-all'
								className={`flex items-center justify-center relative cursor-pointer size-5 border border-gray-400 rounded-md  bg-gray-100 peer-checked:border-red-500 peer-checked:ring-red-500 ring-2 ring-offset-2 ring-transparent peer-checked:bg-red-400 peer-checked:before:bg-tick before:bg-center before:bg-no-repeat before:bg-contain  before:z-20	 before:w-full before:h-full before:absolute before:top-0 before:left-0 peer-checked:before:opacity-100 overflow-hidden`}
							></label>
						</th>
						<th scope='col' className='px-6 py-3'>
							Ism
						</th>
						<th scope='col' className='px-6 py-3'>
							Familiya
						</th>
						<th scope='col' className='px-6 py-3'>
							Sana
						</th>
						<th scope='col' className='px-6 py-3'>
							Telefon raqam
						</th>
						<th scope='col' className='px-6 py-3'>
							Kurs
						</th>
						<th scope='col' className='px-6 py-3'>
							<div>{'  '}</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<Outlet />
					<tr>
						<td colSpan={7}>
							<div className='py-3'></div>
						</td>
					</tr>
					<tr>
						<td colSpan={7}>
							<div className='py-3'></div>
						</td>
					</tr>
					<tr>
						<td colSpan={7}>
							<div className='py-3'></div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
