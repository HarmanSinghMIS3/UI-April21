import { useFsraContext } from '@/contexts/fsra'
import { GLOBAL } from '@/constants/global'

import styles from '@/public/images/components/styles.module.scss'

type LogoOntarioCoatOfArmsProps = {
    svgStyleKey: string;
    pathStyleKey: string;
}

export default function LogoOntarioCoatOfArms({ svgStyleKey, pathStyleKey }: LogoOntarioCoatOfArmsProps) {
    const { coatOfArms } = GLOBAL
	const { settings: { lang } } = useFsraContext()
	
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 400 426.3'
				className={`${styles.ontarioCoat0fArms__svg} ${styles[svgStyleKey]}`}
				aria-labelledby='ontario-coat-of-arms-label'
			>
				<path
					className={styles[pathStyleKey]}
					d='M253,366.2H146v-28.5H253V366.2L253,366.2z M1.8,325.7h141.1l-25.8-28.5H1.8V325.7z M115.2,327.6v7.4
			l28.9,29.8v-37.3L115.2,327.6L115.2,327.6z M397.2,297.2H281.9l-25.8,28.5h141.1V297.2z M254.9,327.6v37.3l28.9-29.8v-7.4
			L254.9,327.6L254.9,327.6z M217.8,5.7h-6.5c-3.2,2.5-16.1,4.8-26.8-1.5c-12.6,0.9-17.1,1.9-18.8-1.4c-1.7,1.5-6.7,1.6-9,1.5
			c-1.7,1.8-1.4,2.5-10.7,2.3c-0.7,2.1-0.2,3.6,0.9,5c1.1,1.4,25.6,24.8,27,26.2s9.8,12.2-2.6,23c-1.4,1.1-2,0.7-2.2,3.3h13.7l6.6-9
			V40.7l32.5-1.5c2.2,1.1,19.2,10.6,10.6,18.9c-3.4,3.2-4.7,3.4-5.2,6h14.1l6-13.7c-1.1,0-1.6-1-1.6-1.6V38.2
			c0.2-0.8,0.2-2.5,1.6-2.6C247.4,33.6,238.6,5.7,217.8,5.7 M174.9,42.8c-0.9-2.1-2.1-3.5-2.6-3.9c-0.4-0.4-3.4-3.3-7.3-7l-13.1,8.6
			l-0.2,9.3c0,1.3,0.2,8.2,8.9,7.5l0.7-11.3C161.2,46.1,174.9,42.8,174.9,42.8z M227.6,45.2c-2.6-2-5.1-3.4-6.3-4l-9.1,0.3
			c0.2,4.6,0.2,15.1-8.5,18.2c-2.5,0.9-2.7,3.2-2.8,4.4h13.9c0.3-1.8,4.7-6.1,6-6.2C220.6,56.2,224.1,48.7,227.6,45.2 M110.9,90
			l-33.3,25.2v12.8l37-33.7h40.9l1.6-4.3H110.9z M1.8,280.5c2.5,0,2.6,2,2.6,2v8.4h2v-47.8l23.8-27.7c0,0-0.1-1.6,0-24.4
			c0.1-17.4,3.5-21.4,10.5-28l21.8-20.9l0.3-0.3l3.1-2.9l2,2.9l0.2,0.3l22.1,33.2l11.6,25.9l0,0c1.7,0,2.6,2,2.6,2l4.4,8.4h2
			l-4.4-10.4l-12-28.7c0,0-9.6-18.2-15.4-30.5c0-0.1-0.1-0.2-0.1-0.3c-2.9-5.9-5-10.2-5-10.3l1.8-1.8v-13.5c0-7.7-1.5-11.9-3.2-13.6
			c1,0,1.7,0.2,2.4,0.3c-0.4-0.6-2.3-3.9-4.2-6.1c1.3-1,2.1-1.6,2.1-1.7c-2-1.5-20-13.4-20.5-22.6c-0.2-2.4,0.9-4.6,3.4-6.5
			c0.8,1,2.5,3.8,4.6,6.5c2.6,3.3,5.8,6.7,8.4,6.7V64.7h12.8l2-4.3h-6c-2.9,0-3-4.3,0-4.3c2.6,0,4.1-0.1,7.9,0l2.3-5.3l-4.1-5.6
			c-6-0.6-9.6-0.7-13.1-1.5c-9.4-2.1-7-10.5-0.1-11.4c4.1-0.5,8.2-0.4,14.2-1.5c12.5-2.4,15.7-13.1,11.3-26.9
			c-0.3-1.2-2.3-2.1-4.1-0.2c1,4.4,1.4,6.6,1.6,8.7c0.3,3.2-5,4.8-6,0.3L86,5.6c-0.5-2.8-2.7-3.8-4.8-1.5c0.5,0.9,0.5,1.5,0.5,1.6
			l1.3,6.6c0.7,3.7-5.1,4.5-6,0.4l-1.4-7.3c-0.6-2.8-2.7-3.8-4.8-1.5c0.5,0.9,0.5,1.5,0.5,1.6c0.2,0.7,0.9,4.7,0.9,5
			c0.8,6.7-10,6.7-9.5,0c0-0.4,0.7-4.3,0.9-5c0-0.1,0-0.6,0.5-1.6c-2-2.4-4.3-1.4-4.8,1.5l-1.1,5.8c-0.1,0.9,0,2.4,0.7,3.6
			c0.8,1.5,4.6,4.8,5.1,7.1c1.2,5.4-3.7,10.7-8.9,10.7c-8.9,0-10.6-9.6-8-13.6c0.2-0.2,2.6-3,2.8-3.8c0.2-0.8-0.1-2.2-0.2-2.5
			l-1.5-7.2c-0.6-2.8-2.7-3.8-4.8-1.5c0.5,0.9,0.5,1.5,0.5,1.6l1.2,6.6c0.7,3.7-5.1,4.5-6,0.4l-1.4-7.3c-0.6-2.8-2.7-3.8-4.8-1.5
			c0.5,0.9,0.5,1.5,0.5,1.6l2,9.7c1.1,5.2-6.8,6.8-8,0.7L25.7,5.5c-0.6-2.8-2.7-3.8-4.8-1.5c0.5,0.9,0.5,1.5,0.5,1.6l1.3,6.6
			c0.7,3.7-5.1,4.5-6,0.4l-1.4-7.3c-0.5-2.8-2.7-3.8-4.8-1.5c0.5,0.9,0.5,1.5,0.5,1.6l1.3,6.6c0.7,3.6-5.5,4.4-6.4,0.3
			C5.1,8.3,4.6,4.4,4,3.7C2.8,2.4,0.6,2.6,0,3.8c-0.2,0.7,1.2,3.9,0.4,9c-0.3,1.5-0.3,3.7-0.1,4.7C2.7,27.7,10,30.6,17.6,31.2
			c7.3,0.5,14.9,1.2,22.7,1.5c7.6,0.3,7.4,11.2,0.3,11.2H28.4l6.1,8.8c-2.4,3.3-9.3,10.9-14.8,20c-2.6,4.4-5,9.1-6.1,13.9h3.2
			c-1.7,2-2.9,5.5-3.1,8.4h2.8c-1.1,1.9-2.4,6.6-2.4,9.1c4.6-0.2,5.5,2.9,5.6,4.3v11.2c-0.9,2.4-5.1,13-8.9,22.6c0,0.1,0-0.1,0,0
			c-2.3,5.5-4.3,11-5.4,14.3C2.2,165.8,1.3,179,1.6,185c6.7,0,6.6,5.2,6.6,5.2v34.7c0,5-6.1,8.4-6.1,8.4L1.8,280.5L1.8,280.5
			L1.8,280.5z M51.5,221.1v12.7c0,2.6-3.4,3-3.4,3l22.7,43.7h0.1c1.7,0,2.6,2,2.6,2l4.6,8.4h2.8l-5.5-10.4l-17.1-34.3l9.3-41.7
			l-25.7-39.7v-0.2c-7.9,7.1-9.6,14.3-9.6,28.2L51.5,221.1L51.5,221.1z M321.4,115.1L288.2,90h-46.3l1.6,4.3h40.8l37.1,33.8
			L321.4,115.1z M369.7,6.7c2.4,1.5,12.8,13,2.1,25.5c-3.3,3.9-8.4,4.8-11.2,4.8c0.5-0.9,1.3-2.6,1.6-5.3l6.7-4.9
			c2.3-1.6,2.3-4.1-0.7-5.1c-0.7,0.9-1.1,1.1-1.2,1.2l-3.7,2.6c-2.4,1.6-5.8-1.8-3.8-4.2l4.7-5.7c1.8-2.2,1.2-4.6-1.9-4.8
			c-0.4,1-0.9,1.4-0.9,1.5l-5.4,6.5c-2.5,3-7.4,1.5-5.9-2l3.7-8.4c1.2-2.6,0-4.8-3.1-4.1c-0.2,1.1-0.4,1.5-0.5,1.6l-4,9.1
			c-0.7,1.4-2.4,1.5-3.1,1.3c-0.8-0.3-1.5-0.7-2.5-1L342,4.2c0.3-2.8-1.5-4.5-4.2-2.9c0.2,1.1,0.1,1.6,0,1.7l-0.9,7.9
			c-0.3,1.5-3.8,1-4.2,0.9c-1.4-0.7-2.6-1.6-2.9-2.6l-1.5-6c-0.7-2.8-2.9-3.7-4.9-1.1c0.6,0.9,0.6,1.5,0.6,1.5l1.9,7.4
			c1.2,3.8,6.1,5.2,12.8,8.2c1.6,0.7,11.2,5.3,14.9,7.1c5.8,2.7,3.9,11-1.5,11c-5.2-0.1-6.1-5.8-5.6-8.4c-2.5-0.1-6.3,1.7-2.6,8.4
			c-2.3,0-6.1-2-5.9-8.4c-2-0.1-2.6,0.5-3.4,1.7c-0.8,1.2-2.4,11.3,13.5,11.4l-4.1,3.9l-17.7,1.4l-0.2,2.1l2.4,5.3h6.2
			c3,0,2.9,4.5-0.1,4.5h-4.2l1.6,4.2h13.1c3.6-3.6,8.6-2.7,9.4,2c0.9,6-5.4,17.4-18.3,17.4c0.9,1.2,2.1,2.1,2.8,2.6
			c-2.1,1.5-4.9,3-7.4,3.6c1.1,1.5,1.3,1.6,2.5,2.6c-2.3,1.8-5.1,3.7-6.7,3.9c0.8,1.1,1.2,1.8,1.8,2.2c-4.9,3.9-6.1,10.8-6,18.5V130
			l1.7,1.7c0.2,0.3-20.4,41.1-20.4,41.1l-12,28.7l-4.4,10.4h2l4.4-8.4c0,0,0.9-2,2.6-2l0,0l11.6-25.9l24.2-36.4l24.3,23.2
			c5.5,5,11.4,8.9,11.4,28.8v24.4l23.8,27.7v47.8h2v-8.4c0,0,0.1-2,2.6-2l0,0v-47.3c0,0-6.1-3.8-6.1-7.5v-35.5c0,0,0.1-5.2,6.7-5.2
			c0.2-14.3,0.3-19.5-18.2-44.1c-20.7-27.6-16-25.1-7.3-63.8c3.2-14.1,2.6-18.2,0.9-23l7.3-8.4h-12.7l-3.2-4.2c5.1-1,8.9-4.4,8.9-4.4
			h23c2.8,0,4.2-2,2.3-4.6c-1,0.3-1.5,0.3-1.6,0.3h-15.2c-3,0-3.1-2.7-2.8-3.2c0.1-0.2,0.2-0.3,0.3-0.6l18.3-5.8
			c2.6-0.9,3.4-3.2,0.9-5.1c-0.9,0.6-1.4,0.7-1.5,0.7l-12.8,4.1c-2.5,0.8-3.1-2.2-3.2-2.6c0-0.3-0.1-0.6-0.1-0.9l12.6-8.9
			c2.3-1.6,2.4-4.1-0.6-5.1c-0.7,0.9-1.1,1.1-1.2,1.1l-8.4,6c-3.4,2.4-5.9-1.8-3.7-4.2l3.2-3.7c1.8-2.1,1.3-4.6-1.8-4.8
			c-0.4,1-0.9,1.4-0.9,1.5l-2.8,3.2c-1,1.1-2.3,1.1-3.1,0.4c-0.2-0.2-0.3-0.3-0.5-0.4l-4.3-3.2c-0.1-0.1-0.5-0.3-1.1-1.3
			c-3.1,0.8-3.2,3.2-1,5L369.7,6.7 M366.9,192.8c-0.1-14.1-2.4-21.9-9.6-28.3h-0.1l-25.8,39.9l9,41.7l-17.2,34.3l-5.5,10.4h3.2
			l4.6-8.4c0,0,0.9-2,2.6-2h0.1l22.7-43.7c0,0-3.4-0.3-3.4-3V221l19.2-28.3L366.9,192.8L366.9,192.8z M245.7,80.2
			c3,0,5.4-2.5,5.4-5.5s-2.4-5.5-5.4-5.5h-93.6c-3,0-5.4,2.5-5.4,5.5s2.4,5.5,5.4,5.5H245.7z M182.5,78.1l-3.1-6.8h16.4l3.1,6.8
			H182.5z M216.3,78.1l-3.1-6.8h16.9l3.1,6.8H216.3L216.3,78.1z M161.5,71.2l3.1,6.8H152c-1.8,0-3.3-1.5-3.3-3.4s1.5-3.4,3.3-3.4
			H161.5L161.5,71.2z M137.8,280c-16.1-12.5-22.5-33.8-22.5-45.7V96.4h168.6v137.9c0,11.9-6.4,33.3-22.5,45.7
			c-16.1,12.5-61.8,38.5-61.8,38.5S153.8,292.4,137.8,280 M178.7,217.5l-4.9,7.7l2.3,1.4l-10.4,6.2l0.6,0.3l30.4,17.8l0.9,0.5v-37.6
			l0,0l-10.3,6.1v-2.7l-7.3,0.3L178.7,217.5L178.7,217.5z M219,217.4l-6.9-0.3v2.7l-10.6-6.1v37.6l0.9-0.5l30.4-17.8l1.1-0.7l-10.3-6
			l2.3-1.4l-4.6-7.5L219,217.4L219,217.4z M201.6,293v-34.7l34.3-19.9l0,0v12.3l2.2-1.3l5,7.9l5.1-7.9l2.2,1.4v-6.7l13.5,7.9l0.1-2.7
			l9.1-0.3l-3.9-8.5l2.3-1.3l-13.1-7.7l12.9-7.5l-2.2-1.4l4.2-8.4l-9.1-0.6v-2.7l-13.3,7.8v-16l-2.3,1.4l-5-7.9l-5,7.9l-2.3-1.4v15.6
			l-5.1-3l-0.2,2.9l-7.5-0.5l-1-0.1l-5-7.6l2.3-1.4l-4.4-2.6l-0.8-0.5l12.9-7.7l-2.3-1.4l4.2-8.4l-9.1-0.7v-2.7l-13.2,7.9v-15.8
			l-2.3,1.4l-5-7.9l-5,7.9l-2.3-1.4v15.9l-13.4-7.8v2.7l-9.1,0.7l4.2,8.4l-2.2,1.4l13.2,7.7l-0.6,0.3l-4.4,2.6l2.3,1.4l-4.6,7.5
			l-1.3,0.1l-7.4,0.5l-0.2-2.9l-5,3V203l-2.3,1.4l-5-7.9l-5,7.9l-2.3-1.4v16l-13.3-7.8v2.7l-9.1,0.6l4.2,8.4l-2.2,1.4l12.9,7.5
			l-13.2,7.8l2.3,1.3l-3.9,8.5l9.1,0.3l0.1,2.7l13.5-7.9v6.7l2.2-1.4l5.1,7.9l5-7.9l2.2,1.3v-12.3l0,0l33.5,19.6v34.7L201.6,293
			L201.6,293L201.6,293z M117.3,119.1h74.9V98.5h-74.9V119.1L117.3,119.1z M206.8,119.1h74.9V98.5h-74.9V119.1L206.8,119.1z
			M281.8,134.9h-74.9v20.7h74.9V134.9z M192.2,134.9h-74.9v20.7h74.9V134.9z M154.8,397.2h4.7v4.5h0.1c1.5-3.2,5-5.2,8.5-5.2
			c6.7,0,9.8,4.6,9.8,12.2v16.9h-4.8V411c0-6.7-1.4-9.8-5.5-10.2c-5.5,0-7.9,4.8-7.9,11.7v13.1h-4.9V397.2L154.8,397.2z M203.1,399.2
			c2.4-1.5,5.3-2.6,8.6-2.6c7.5,0,10.5,4,10.5,11.8v11.8c0,3.2,0.1,4.7,0.2,5.5h-4.5V422h-0.1c-1.1,1.7-3.7,4.4-8.1,4.4
			c-5.6,0-9.6-2.6-9.6-8.9c0-7.1,7.2-9.4,12.1-9.4c1.9,0,3.2,0,5.1,0.1c0-4.9-1.6-7.4-6.5-7.4c-2.7,0-5.6,1.1-7.6,2.9L203.1,399.2
			L203.1,399.2z M217.3,412.1c-1,0-2-0.1-3.1-0.1c-2.6,0-9,0.4-9,5.5c0,3,2.6,4.6,4.9,4.6c4.8,0,7.3-3.2,7.3-7.4L217.3,412.1
			L217.3,412.1z M242.6,401.7c-0.7-0.2-1.4-0.3-2-0.3c-4.5,0-7.5,4.4-7.5,11.6v12.5h-5v-28.2h4.8v4.6h0.1c1.4-3,4.3-5,7.2-5
			c1.1,0,1.8,0.1,2.6,0.3L242.6,401.7L242.6,401.7L242.6,401.7z M270.8,396.5c7.9,0,13.2,6.2,13.2,14.9c0,8.1-5.5,14.9-13.2,14.9
			s-13.3-6.7-13.3-14.9C257.5,402.8,262.8,396.5,270.8,396.5 M270.8,422c5.6,0,8.1-5.5,8.1-10.7c0-5.4-3-10.7-8.1-10.7
			c-5.1,0-8.2,5.2-8.2,10.7C262.6,416.4,265.1,422,270.8,422 M196.7,397.2h-7.1V389l-5,1.7v6.6l-4.1,4.3h4.1v16.6
			c0,5.7,3.2,8.2,8.4,8.2c1.5,0,3-0.4,4.1-0.7v-4.4c-0.8,0.4-1.8,0.9-3.2,0.9c-2.3,0-4.3-1.8-4.3-5v-15.5h7.1V397.2z M247.2,397.2h5
			v28.4h-5V397.2z M249.7,393.4c1.7,0,3.1-1.5,3.1-3.2s-1.4-3.2-3.1-3.2s-3.1,1.5-3.1,3.2S248,393.4,249.7,393.4 M132.3,386
			c10.8,0,17.2,8.5,17.2,20.1s-6.3,20.1-17.2,20.1s-17.2-8.3-17.2-20.1C115.1,394.7,121.4,386,132.3,386 M132.3,421.4
			c8.3,0,11.8-7.4,11.8-15.2c0-7.8-3.9-15.3-11.8-15.2c-7.9-0.1-11.8,7.3-11.8,15.2C120.5,414.1,124,421.4,132.3,421.4'
				/>
			</svg>
			<span
				id='ontario-coat-of-arms-label'
				className='visually-hidden'
				aria-hidden='true'
			>
				{coatOfArms[lang]}
			</span>
		</>
    )
}