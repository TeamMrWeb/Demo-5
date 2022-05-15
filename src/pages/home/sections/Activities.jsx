import Button from '../../../components/Button'
import Card from '../../../components/Card'
import fitness from '../../../assets/Activities/fitness.png'
import image1 from '../../../assets/Activities/image1.png'
import muscle from '../../../assets/Activities/muscle.png'
import yoga from '../../../assets/Activities/yoga.png'

export default function Activities() {
	return (
		<div className='activities'>
			<div name='activities' className='scroll'></div>
			<div className='cards'>
				<Card
					title={'Musculación'}
					backgroundImage={muscle}
					backgroundColor={'#292D34'}
					paragraph='Como su propio nombre indica, su objetivo es el desarrollo de los músculos. La musculación es una disciplina que requiere tiempo, dedicación y esfuerzo. '
					buttonEnabled={true}
					buttonText={'Descubrir'}
					buttonLink={`/actividad?name=musculacion`}
				/>
				<Card
					title={'Crossfit'}
					backgroundImage={fitness}
					backgroundColor={'#292D34'}
					paragraph='Es un tipo de entrenamiento en el que casi no existe descanso. El crossfit es  programa de ejercicios intenso y de entrenamiento cruzado que combina diferentes tipos de ejercicios.'
					buttonEnabled={true}
					buttonText={'Descubrir'}
					buttonLink={`/actividad?name=crossfit`}
				/>
				<Card
					title={'Yoga'}
					backgroundImage={yoga}
					backgroundColor={'#292D34'}
					paragraph='La yoga es una práctica que conecta el cuerpo, la respiración y la mente. La yoga ayuda al individuo a tener una relación más armónica con su cuerpo, a controlar su mente y emociones'
					buttonEnabled={true}
					buttonText={'Descubrir'}
					buttonLink={`/actividad?name=yoga`}
				/>
			</div>
			<Button text='Conocer más' to={'/actividades'} />
			<img
				className='activities__image'
				src={image1}
				alt='persona posando en el gimnasio de belgrano'
			/>
		</div>
	)
}
