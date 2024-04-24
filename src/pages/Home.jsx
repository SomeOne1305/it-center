import About from '../components/about/About'
import Courses from '../components/course/Courses'
import CoursesCard from '../components/course/Courses.card'
import Maps from '../components/maps/Maps'
import HeaderBlock from './../components/header/Header_block'

const Home = () => {
	return (
		<>
			<HeaderBlock />
			<CoursesCard />
			<Courses />
			<Maps />
			<About />
		</>
	)
}

export default Home
