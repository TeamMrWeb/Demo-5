import { useRef } from 'react'
import Carousel from '../../../components/Carousel'
import Button from '../../../components/Button'
import figure from '../../../assets/figure.png'

export default function Welcome() {
	const backgroundContainer = useRef(null)

	return (
		<div className='welcome' ref={backgroundContainer}>
			<div name='welcome' className='scroll'></div>
			<div className='row-card'>
				<img className='figure' src={figure} alt='figure' />
				<div className='info'>
					<h1 className='row-card__title'>
						GIMNASIO EN BELGRANO{' '}
						<b className='title-color'>BARATO</b> Y{' '}
						<b className='title-color'>COMPLETO</b>
					</h1>
					<Button text='Únete ahora!' />
				</div>
			</div>
			<Carousel backgroundContainer={backgroundContainer} />
		</div>
	)
}
