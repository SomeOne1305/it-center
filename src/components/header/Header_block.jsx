import { Element, Link as SLink } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import { Container } from '../common'
const HeaderBlock = () => {
	return (
		<Element name='home' className='head_block block py-5 pt-[5%]'>
			<Container>
				<div
					id='header-block'
					className='head_block_item w-full h-full flex flex-col justify-center py-[5%]'
				>
					<div className='inline-flex pb-4 pt-5'>
						<img
							className='max-w-[300px] w-[100%]'
							src='./icons/logo.svg'
							alt=''
						/>
					</div>
					<TypeAnimation
						sequence={[
							// Same substring at the start will only be typed out once, initially
							'"Web Dasturlash"',
							2000, // wait 1s before replacing "Mice" with "Hamsters"
							'"Kompyuter Savotxonligi"',
							2000,
							'"Kompyuter Mutaxasisligi"',
							2000,
						]}
						className='text-secondary font-bold uppercase text-xl xs:text-3xl lg:text-5xl'
						wrapper='span'
						speed={50}
						repeat={Infinity}
					/>
					<h2 className='xs:text-3xl  lg:text-5xl text-xl text-white font-bold'>
						KURSLARI QUMQO'RG'ONDA
					</h2>
					<p className='md:text-2xl text-white py-3 text-lg sm:text-xl'>
						Kelajak shu yerdan boshlanadi!
					</p>
					<div className='mt-5'>
						<SLink
							to='courses'
							className='w-auto py-2 px-3 md:py-4 md:px-5 bg-secondary rounded-md mt-5 text-xs xs:text-sm sm:text-md lg:text-xl uppercase font-bold hover:bg-[#38f89e]'
						>
							Kursni tanlash
						</SLink>
					</div>
				</div>
			</Container>
		</Element>
	)
}

export default HeaderBlock
