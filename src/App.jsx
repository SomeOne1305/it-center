import React, { useContext, useEffect } from 'react'

import './App.css'

import Cookies from 'js-cookie'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Table, TableData } from './admin'
import CourseInfo from './components/course_info/CourseInfo'
import AdminLayout from './components/layout/AdminLayout'
import HomeLayout from './components/layout/HomeLayout'
import { Context } from './context'
import { CoursePage, Home, LoginPage, NotFound } from './pages'

function App() {
	const { modalOpen, setModalOpen, isAuthentificated, setIsAuthentificated } =
		useContext(Context)
	const navigate = useNavigate()

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	window.addEventListener('keydown', e => {
		if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === 'o') {
			if (Cookies.get('access')) {
				setModalOpen(false)
				navigate('admin/list/on-process')
			} else {
				setModalOpen(true)
			}
		}
	})

	useEffect(() => {
		const _cookie = Cookies.get('access')
		if (_cookie) {
			setIsAuthentificated(true)
		} else {
			setIsAuthentificated(false)
		}
	}, [])

	return (
		<>
			<Toaster />
			<Routes>
				<Route path='/' element={<HomeLayout />}>
					<Route path='*' element={<NotFound />} />
					<Route path='' element={<Home />} />
					<Route path='course' element={<CoursePage />}>
						<Route path=':course' element={<CourseInfo />} />
					</Route>
				</Route>
				<Route path='admin' element={<AdminLayout />}>
					<Route path='list' element={<Table />}>
						<Route path=':courseType' element={<TableData />} />
					</Route>
				</Route>
			</Routes>
			{modalOpen && <LoginPage />}
		</>
	)
}

export default App
