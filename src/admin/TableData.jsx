import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loaders';
import { Context } from '../context';
import { StudentsService } from './../services';
import TableRow from './TableRow';

const TableData = () => {
	const { courseType } = useParams();
	const { setSelectAll, ids, selectAll, setIds, setDeletePath } =
		useContext(Context);

	const { data, isLoading, isError, error, refetch } = useQuery(
		['students', courseType],
		() =>
			StudentsService.getData(
				courseType === 'on-process' || courseType === 'on-register'
					? courseType
					: 'on-process/' + courseType
			)
	);

	React.useEffect(() => {
		if (selectAll) {
			setIds(data?.data?.map(item => item._id));
		} else {
			setIds([]);
		}
		if (courseType) {
			setDeletePath(
				courseType === 'on-register' ? 'on-register' : 'on-process'
			);
		}
	}, [selectAll, data, setIds, courseType]);
	if (ids) {
		refetch();
	}
	if (isError) {
		console.log(error);
		return (
			<tr>
				<td colSpan={7}>
					<div className='w-full flex items-center flex-col justify-center py-3'>
						<div className='size-24 bg-red-200 overflow-hidden rounded-full'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/3194/3194058.png'
								alt=''
								className='w-full h-full'
							/>
						</div>
						<div className='p-3 text-center'>
							<h2 className='text-xl font-bold'>Error occured...</h2>
							<p className='text-lg max-w-72'>
								Something went wrong. Please check your connection or try again
								later.
							</p>
						</div>
					</div>
				</td>
			</tr>
		);
	}

	if (!isError && !isLoading && data?.data?.length === 0) {
		return (
			<tr>
				<td colSpan={7}>
					<div className='w-full flex items-center justify-center flex-col py-3'>
						<div className='size-24 bg-blue-200 rounded-full p-1 overflow-hidden'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/7486/7486754.png'
								className='w-full h-full select-none'
								alt=''
							/>
						</div>
						<h2 className='text-xl font-bold py-2 select-none'>No Data</h2>
					</div>
				</td>
			</tr>
		);
	}

	return (
		<>
			{isLoading ? (
				<tr>
					<td colSpan={6}>
						<Loader />
					</td>
				</tr>
			) : (
				data?.data?.map(row => (
					<TableRow
						name={row?.name}
						surname={row?.surname}
						phoneNumber={row?.phone_number}
						id={row?._id}
						date={row?.createdAt}
						course={row?.course}
						key={row?._id}
						param={courseType === 'on-register' ? 'on-register' : 'on-process'}
						reGet={refetch}
					/>
				))
			)}
		</>
	);
};

export default TableData;
