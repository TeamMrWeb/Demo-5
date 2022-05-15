import Title from '../components/Title'
import Card from '../components/Card'
import fitcombat from '../assets/Activities/fitcombat.png'
import spinning from '../assets/Activities/spinning.png'
import fitness from '../assets/Activities/fitness.png'
import muscle from '../assets/Activities/muscle.png'
import zumba from '../assets/Activities/zumba.png'
import yoga from '../assets/Activities/yoga.png'

export default function Classes() {
	return (
		<section className='classes-section'>
			<div className='classes-container'>
				<div className='classes-header'>
					<Title title='Conoce todas las' titleColor=' actividades' />
				</div>
				<div className='classes-content'>
					<div className='classes-cards'>
						<Card
							title={'Musculación'}
							backgroundImage={muscle}
							backgroundColor={'#292D34'}
							paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?'
							buttonEnabled={true}
							buttonText={'Descubrir'}
							buttonLink={`/actividad?name=musculación`}
						/>
						<Card
							title={'Crossfit'}
							backgroundImage={fitness}
							backgroundColor={'#292D34'}
							paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?'
							buttonEnabled={true}
							buttonText={'Descubrir'}
							buttonLink={`/actividad?name=crossfit`}
						/>
						<Card
							title={'Yoga'}
							backgroundImage={yoga}
							backgroundColor={'#292D34'}
							paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?'
							buttonEnabled={true}
							buttonText={'Descubrir'}
							buttonLink={`/actividad?name=yoga`}
						/>
						<Card
							title={'Spinning'}
							backgroundImage={spinning}
							backgroundColor={'#292D34'}
							paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?'
							buttonEnabled={true}
							buttonText={'Descubrir'}
							buttonLink={`/actividad?name=spinning`}
						/>
						<Card
							title={'Zumba'}
							backgroundImage={zumba}
							backgroundColor={'#292D34'}
							paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?'
							buttonEnabled={true}
							buttonText={'Descubrir'}
							buttonLink={`/actividad?name=zumba`}
						/>
						<Card
							title={'Fit Combat'}
							backgroundImage={fitcombat}
							backgroundColor={'#292D34'}
							paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?'
							buttonEnabled={true}
							buttonText={'Descubrir'}
							buttonLink={`/actividad?name=fitcombat`}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
