import { faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useParams } from 'react-router-dom'
import {
	CssIcon,
	ExcelIcon,
	HtmlIcon,
	JsIcon,
	NextjsIcon,
	NodeIcon,
	PowerpointIcon,
	ReactIcon,
	SassIcon,
	TsIcon,
	WordIcon,
} from '../../assets/icons'
import { useSplitArray } from '../../hooks'

const CourseInfo = () => {
	const courses = [
		{
			bg: 'https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg',
			course: 'Web dasturlash',
			key: 'web-development',
			coursePrice: '450 000 sum/oy',
			courseDuration: '8-10 oy',
			title:
				"Veb-ishlab chiqish mahorati : Dinamik va moslashuvchan veb-saytlar yasashni o'rganing",
			subtitle:
				"Mutaxassis ko'rsatmalari va amaliy loyihalar bilan Internetning kuchini oching",
			description:
				"Bizning keng qamrovli kursimiz bilan veb-ishlab chiqish mahorati sohasiga kirib boring. Asosiy tushunchalardan tortib ilg'or texnikalargacha, siz dinamik va sezgir veb-saytlarni yaratishning barcha qirralarini o'rganasiz. Amaliy loyihalar orqali amaliy tajribaga ega bo'ling, bu erda siz yangi bilimlaringizni real dunyo stsenariylariga qo'llaysiz. O'z mahoratingizni oshirish uchun soha mutaxassislari va hamkasblar bilan munozaralarda qatnashing, maslahat so'rang va loyihalarda hamkorlik qiling. Sizning sur'atingizga moslashtirilgan shaxsiylashtirilgan ta'lim yo'llari bilan siz yo'lning har bir bosqichida ko'rsatma olasiz. Tugatganingizdan so'ng, sizning tajribangiz va veb-ishlab chiqishdagi har qanday muammoni hal qilishga tayyorligingizni tasdiqlovchi sertifikatga ega bo'ling.",
			features: [
				"Keng veb-ishlab chiqish tajribasiga ega bo'lgan soha mutaxassislaridan o'rganish.",
				"Chuqurroq tushunish uchun tushunchalarni amaliy loyihalar orqali qo'llash.",
				"Moslashuvchan rejalashtirish tanlovlari bilan o'zingizning sur'atingizda o'qish",
				"Eng so'nggi veb-ishlab chiqish texnologiyalari va vositalarini, jumladan React kabi mashhur frameworkni o'zlashtirish orqali oldinda turish.",
				"Muhokamalarda qatnashishingiz, maslahat so'rashingiz va loyihalarda hamkorlik qilishingiz mumkin bo'lgan jonli o'quvchilar va murabbiylar hamjamiyatiga qo'shilish.",
				"Barcha mahorat darajalari uchun keng qamrovli o'rganish tajribasi",
				"Kursni tamomlagandan so'ng sertifikat olish",
			],
			tools: [
				{
					icon: HtmlIcon,
					name: 'HTML',
				},
				{
					icon: CssIcon,
					name: 'CSS',
				},
				{
					icon: SassIcon,
					name: 'Sass',
				},
				{
					icon: JsIcon,
					name: 'Javascript',
				},
				{
					icon: TsIcon,
					name: 'Typescript',
				},
				{
					icon: NodeIcon,
					name: 'Node JS',
				},
				{
					icon: ReactIcon,
					name: 'React JS',
				},
				{
					icon: NextjsIcon,
					name: 'Next JS',
				},
			],
		},
		{
			bg: 'https://www.guidingtech.com/wp-content/uploads/Top-Ways-to-Disable-Background-Apps-on-Windows-11_4d470f76dc99e18ad75087b1b8410ea9.jpg',
			course: 'Kompyuter savodxonligi',
			coursePrice: '300 000 sum / oy',
			courseDuration: '1-2 oy',
			key: 'computer-learning',
			title:
				"Kompyuter dasturlarini o'zlashtirish: asosiy vositalar va ilg'or texnikalar",
			subtitle:
				"Bizning keng qamrovli dasturiy ta'minot kursimiz bilan ko'nikmalaringizni oshiring",
			description:
				"Kompyuter dasturlarini o'zlashtirish kursimiz bilan kompyuter dasturiy ta'minotining to'liq imkoniyatlarini oching. Microsoft Excel, Word va PowerPoint kabi muhim vositalarning asosiy funksiyalarini chuqur o'rganing, kundalik vazifalar va ish jarayonlarini o'zlashtiring. Excel makroslari, Word xatlarini birlashtirish va PowerPoint multimedia integratsiyasi kabi ilg'or texnikalarni o'rganing, bu esa o'zingizga vazifalarni samarali va aniqlik bilan bajarish imkonini beradi. Amaliy mashqlar va real stsenariylar orqali siz o'z tushunchangizni mustahkamlaysiz va har qanday professional sharoitda o'z mahoratingizni qo'llashga ishonchni rivojlantirasiz. Bizning moslashuvchan o'quv platformamiz sizga o'zingizning qulayligingizda kurs materiallariga kirish imkonini beradi, shu bilan birga soha mutaxassislarining ekspert ko'rsatmalari eng yuqori sifatli ta'lim olishingizni ta'minlaydi.",
			features: [
				"Microsoft Excel, Word, PowerPoint va XSL kabi ilg'or vositalarni o'rganish",
				"Excel makroslarini, Word pochta birlashmasini va PowerPoint multimedia integratsiyasini o'rganish",
				"O'rganishni amaliy mashqlar va real stsenariylar bilan mustahkamlash",
				"Markazimiz mutaxassislarining tushunchalari va ko'rsatmalaridan foydalanish",
				'Tanqidiy fikrlashni va muammolarni hal qilishni rivojlantiruvchi loyihalarda ishtirok etish',
				'Fikr almashish va maslahat olish uchun qo‘llab-quvvatlovchi o‘quvchilar hamjamiyatiga qo‘shilish',
				"Kursni tamomlagandan so'ng sertifikat olish",
			],
			tools: [
				{
					icon: WordIcon,
					name: 'Microsoft Word',
				},
				{
					icon: ExcelIcon,
					name: 'Microsoft Excel',
				},
				{
					icon: PowerpointIcon,
					name: 'Microsoft PowerPoint',
				},
				{
					icon: 'https://my.gov.uz/img/new-version/logo.png',
					name: 'my.gov.uz',
				},
				{
					icon: 'https://id.egov.uz/assets/favicon/favicon-128.png',
					name: 'One ID',
				},
			],
		},
		{
			bg: 'https://wallpapercave.com/wp/wp5699160.jpg',
			course: 'Kompyuter mutaxassisligi',
			key: 'computer-repairing',
			coursePrice: '600 000 sum / oy',
			courseDuration: '1-2 oy',
			title:
				"Kompleks kompyuterga texnik xizmat ko'rsatish va tizimni optimallashtirish kursi",
			subtitle:
				"Kompyuter tizimlarini ta'mirlash, o'rnatish va optimallashtirish san'atini egallang",
			description:
				"Bizning hamma narsani o'z ichiga olgan kursimiz bilan kompyuterga har tomonlama texnik xizmat ko'rsatish va tizimni optimallashtirish sirlarini oching. Sizni kompyuterlarni ta'mirlash va texnik xizmat ko'rsatish sohasida mukammal bo'lish uchun zarur bo'lgan ko'nikmalar bilan jihozlash uchun mo'ljallangan ushbu kurs ilg'or diagnostika, apparat ta'mirlash, dasturiy ta'minotni o'rnatish va tizimni optimallashtirish kabi keng ko'lamli mavzularni o'z ichiga oladi. Uskuna va dasturiy ta'minot bilan bog'liq muammolarni to'g'ri aniqlash uchun diagnostika mahoratiga chuqur kirib boring va asosiy apparat komponentlarini ta'mirlash va almashtirish bo'yicha amaliy tajribaga ega bo'ling. Optimal ishlash uchun operatsion tizimlar va dasturiy ta'minot dasturlari to'g'ri o'rnatilganligini ta'minlab, dasturiy ta'minotni o'rnatish va sozlash san'atini o'zlashtiring. Tizim komponentlarini optimallashtirish, umumiy tizim samaradorligini oshirish va drayverlarni samarali boshqarish usullarini o'rganing. Bundan tashqari, muhim fayllarni himoya qilish va saqlash joyini optimallashtirish uchun zaxiralash, tiklash va qismlarga ajratish kabi muhim ma'lumotlarni boshqarish usullarini o'rganing.",
			features: [
				"Uskuna va dasturiy ta'minot muammolarini aniq aniqlash uchun ilg'or diagnostika usullarini o'rganish",
				'Protsessor, operativ xotira va anakart kabi muhim apparat komponentlarini ta’mirlash va almashtirish bo‘yicha amaliy tajribaga ega bo‘lish',
				"Optimal ishlash uchun operatsion tizimlar va muhim dasturiy ta'minot dasturlarini o'rnatish va sozlashni o'zlashtirish",
				"Umumiy tizim samaradorligini oshirish uchun tizim komponentlarini, jumladan disk drayverlarini, grafik kartalarni va tarmoq adapterlarini optimallashtirish usullarini o'rganish",
				"Drayvlarning ahamiyatini tushunib olish va ularni qanday yangilash, o'rnatish va muammolarni samarali hal qilishni o'rganish",
				"Muhim fayllarni himoya qilish va saqlash joyini optimallashtirish uchun ma'lumotlarni zaxiralash, tiklash va qismlarga ajratish bo'yicha ko'nikmalarga ega bo'lish",
				"Kompyuter tizimlarining ishlash muddatini uzaytirish va kelajakdagi muammolarni minimallashtirish uchun profilaktik xizmat ko'rsatish strategiyalarini o'rganish",
				"Umumiy kompyuter muammolarini samarali aniqlash va hal qilish uchun muammolarni bartaraf etish ko'nikmalarini rivojlantirish.",
			],
			tools: [
				{
					icon: 'https://cdn-icons-png.flaticon.com/512/220/220215.png',
					name: 'Microsoft Windows',
				},
				{
					icon: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
					name: 'Ubuntu',
				},
				{
					icon: 'https://cdn-icons-png.flaticon.com/512/3093/3093045.png',
					name: 'Kompyuter driverlari',
				},
				{
					icon: 'https://cdn-icons-png.flaticon.com/512/7454/7454215.png',
					name: 'Kompyuter qurilmalari',
				},
				{
					icon: 'https://cdn-icons-png.flaticon.com/512/7104/7104419.png',
					name: 'Flash xotiralar',
				},
			],
		},
	]
	const { course } = useParams()
	const [data, setData] = React.useState([])
	React.useEffect(() => {
		const courseData = courses.find(e => e.key === course)
		if (courseData) {
			setData(courseData)
		} else {
			setData(null)
		}
	}, [course])
	const [firstArray, secondArray] = useSplitArray(
		data.features ? data.features : []
	)
	return (
		<section className='w-full'>
			<div className='w-full min-h-[50vh] lg:min-h-[90vh] xl:min-h-[60vh] relative'>
				<div className='absolute -z-10 w-full h-full top-0 left-0 bg-gradient-to-t from-black to-transparent'></div>
				<div
					className={`absolute top-0 -z-20 left-0 h-full w-full bg-cover bg-no-repeat bg-center`}
					style={{
						backgroundImage: `url('${data?.bg}')`,
					}}
				></div>
				<div className='container'>
					<div className='flex items-end flex-col md:flex-row'>
						<div className='w-full md:w-1/2 xl:w-[40%] py-2 md:pt-[5%] xl:pt-[10%]'>
							<h1 className='text-xl md:text-2xl text-green-500 mt-12 lg:mt-8'>
								{data?.course}
							</h1>
							<h2 className='text-2xl md:text-3xl text-white font-bold mt-3 uppercase'>
								{data?.title}
							</h2>
							<p className='text-lg md:text-xl text-white py-2 my-2'>
								{data?.subtitle}
							</p>
						</div>
						<div className='w-full md:w-1/2 flex justify-start md:justify-center py-2.5'>
							<div className='p-2.5 block bg-white rounded-lg items-start'>
								<div className='block py-1.5'>
									<span className='text-gray-500 text-md '>
										<FontAwesomeIcon icon={faDollarSign} className='mr-1' />
										Kurs narxi:
									</span>
									<span className='font-bold ml-3 text-md p-1 text-white bg-green-400 rounded-sm'>
										{data?.coursePrice}
									</span>
								</div>
								<div className='block py-1.5'>
									<span className='text-gray-500 text-md '>
										<FontAwesomeIcon icon={faClock} className='mr-1' />
										Kurs davomiyligi:
									</span>
									<span className='font-bold ml-3 text-md p-1 text-white bg-green-400 rounded-sm'>
										{data?.courseDuration}
									</span>
								</div>
								<div className='w-full h-[2.5px] bg-gray-300 my-3'></div>
								<button className='w-full py-2 text-center opacity-90 hover:opacity-100 text-white bg-green-500 rounded-md'>
									Kursga yozilish
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full bg-[#efefef]'>
				<div className='container py-3'>
					<div className='p-4 my-3 rounded-lg bg-white'>
						<h3 className='text-xl font-bold'>Bizning kurs haqida</h3>
						<p className='text-lg p-2 border-l-4 rounded-l-lg border-green-400 mt-4'>
							{data?.description}
						</p>
						<h3 className='text-xl font-bold mt-5 py-3'>
							Biz sizga va'da beramiz:
						</h3>
						<div className='w-full flex items-center flex-col lg:flex-row py-3'>
							<ul className='w-full lg:w-1/2 pl-4 ml-2'>
								{firstArray.map((item, i) => (
									<li
										key={i + '. feature-1'}
										className="font-semibold mt-2 list-image-[url('https://cdn-icons-png.flaticon.com/16/5610/5610944.png')]"
									>
										{item}
									</li>
								))}
							</ul>
							<ul className='w-full lg:w-1/2 pl-4 ml-2'>
								{secondArray.map((item, i) => (
									<li
										key={i + '. feature-2'}
										className="font-semibold mt-2 list-image-[url('https://cdn-icons-png.flaticon.com/16/5610/5610944.png')]"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
						<h3 className='text-xl font-bold mt-5 py-3'>Kursda o'rganasiz:</h3>
						<div className='flex flex-wrap my-5'>
							{data.tools
								? data.tools.map(item => (
										<div
											key={item.name}
											className='py-1 px-1.5 mr-2 mt-2 rounded-md bg-gray-200 inline-flex items-end'
										>
											<img
												src={item.icon}
												className='size-6 md:size-8'
												alt=''
											/>
											<span className='font-semibold text-md md:text-lg ml-1'>
												{item.name}
											</span>
										</div>
								  ))
								: ''}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CourseInfo
