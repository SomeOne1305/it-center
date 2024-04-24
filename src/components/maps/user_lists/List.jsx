import axios from 'axios'
import React from 'react'
import { Container } from '../../common'

const List = () => {
	const [users, setUsers] = React.useState([])

	React.useEffect(() => {
		async function getUsers() {
			const data = await axios.get(
				'https://660c1e9e3a0766e85dbd767c.mockapi.io/users'
			)
			setUsers(data.data)
		}

		getUsers()
	}, [])

	async function deleteUsers(id) {
		await axios.delete(
			`https://660c1e9e3a0766e85dbd767c.mockapi.io/users/${id}`
		)
		setUsers(users.filter(user => user.id !== id))
	}

	return (
		<div className='mt-[90px] '>
			<Container>
				<div className='w-full p-5 gap-4 '>
					<div className='w-full mx-auto'>
						<div className='flex flex-col'>
							<div className='overflow-x-auto shadow-md sm:rounded-lg'>
								<div className='inline-block min-w-full align-middle'>
									<div className='overflow-hidden '>
										<table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700'>
											<thead className='bg-gray-100 dark:bg-gray-700'>
												<tr>
													<th scope='col' className='p-4'>
														<div className='flex items-center'>
															<input
																id='checkbox-all'
																type='checkbox'
																className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
															/>
															<label htmlFor='checkbox-all' className='sr-only'>
																checkbox
															</label>
														</div>
													</th>
													<th
														scope='col'
														className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
													>
														Familya
													</th>
													<th
														scope='col'
														className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
													>
														Ismi
													</th>
													<th
														scope='col'
														className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
													>
														Telefon Raqami
													</th>
													<th
														scope='col'
														className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
													>
														Kurs Nomi
													</th>
													<th scope='col' className='p-4'>
														<span className='sr-only'>Edit</span>
													</th>
												</tr>
											</thead>
											<tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
												{users.map((user, i) => {
													return (
														<tr
															key={i}
															className='hover:bg-gray-100 dark:hover:bg-gray-700'
														>
															<td className='p-4 w-4'>
																<div className='flex items-center'>
																	<input
																		id='checkbox-table-1'
																		type='checkbox'
																		className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
																	/>
																	<label
																		htmlFor='checkbox-table-1'
																		className='sr-only'
																	>
																		checkbox
																	</label>
																</div>
															</td>
															<td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
																{user.last_name}
															</td>
															<td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
																{user.first_name}
															</td>
															<td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
																{user.phone}
															</td>
															<td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
																{user.course}
															</td>

															<td className='py-4 px-6 text-sm font-medium text-right whitespace-nowrap'>
																<button
																	onClick={() => deleteUsers(user.id)}
																	className=''
																>
																	<img
																		className='w-[32px]'
																		src='./trash.svg'
																		alt=''
																	/>
																</button>
															</td>
														</tr>
													)
												})}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default List
