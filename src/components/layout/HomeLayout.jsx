import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../footer/Footer'
import Form from '../form/Form'
import Header from '../header/Header'
const HomeLayout = () => {
	const location = useLocation()
	const [isForm, setIsForm] = useState(false)
	useEffect(() => {
		setIsForm(location.pathname === '/' || location.pathname.includes('course'))
	}, [location.pathname])
	return (
		<>
			<Header />
			<Outlet />
			{isForm && <Form />}
			<Footer />
		</>
	)
}

export default HomeLayout
