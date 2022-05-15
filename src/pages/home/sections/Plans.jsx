import Title from '../../../components/Title'
import figureGray from '../../../assets/Home/figureGray.png'

export default function Plans() {
	const plans = [
		{
			icon: 'fa-cube',
			title: 'Básico',
			price: '$21',
			subtitle: 'un mes',
			items: [
				'Área de peso libre.',
				'Área de peso integrado.',
				'Área de cardio.',
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
			],
		},
		{
			icon: 'fa-cubes',
			title: 'Oro',
			price: '$50',
			subtitle: '6 meses',
			items: [
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
			],
		},
		{
			icon: 'fa-crown',
			title: 'Premium',
			price: '$99',
			subtitle: '24 meses',
			items: [
				'Invitar a un amigo.',
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
			],
		},
	]

	return (
		<div className='plans'>
			<div name='plans' className='scroll'></div>
			<div className='content'>
				<Title
					title='Nuestra '
					titleColor='membresía'
					subtitle='Conoce todos nuestros '
					subtitleColor='planes'
				/>
				<div className='cards'>
					{plans.map((plan, id) => {
						return (
							<article className='plan' key={id}>
								<header className='header'>
									<i className={'fa-solid ' + plan.icon}></i>
									<h2 className='header__title'>
										{plan.title}
									</h2>
									<span className='header__subtitle'>
										<span className='header__subtitle-color'>
											{plan.price}
										</span>{' '}
										/ {plan.subtitle}
									</span>
								</header>
								<ul className='list'>
									{plan.items.map((item, id) => {
										return (
											<li className='list__item' key={id}>
												<i className='fa-solid fa-check'></i>
												<span className='list__text'>
													{item}
												</span>
											</li>
										)
									})}
								</ul>
							</article>
						)
					})}
				</div>
			</div>
			<img className='figureGray' src={figureGray} alt='figure' />
		</div>
	)
}
