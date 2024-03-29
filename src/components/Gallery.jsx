import Title from './Title'

export default function Gallery({ images }) {
	return (
		<section className='gallery'>
			<div name='gallery' className='scroll'></div>
			<div className='content'>
				<Title
					title='Nuestra '
					titleColor='galeria'
					subtitle='Fotos del '
					subtitleColor='gimnasio de belgrano'
				/>
				<div className='gallery-container'>
					<ul className='list'>
						{images.map((image, id) => (
							<li className='gallery__item' key={id}>
								<img
									className='gallery__image'
									src={image.url}
									alt={image.alt}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
