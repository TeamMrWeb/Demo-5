import { Form } from '../components/Form'
import Title from '../components/Title'

export default function Contact() {
	const addresses = [
		{
			name: 'Belgrano',
			data: [
				{
					icon: 'fa-map-marker-alt',
					data: 'Av. Belgrano 742',
				},
				{
					icon: 'fa-phone',
					data: '3921-2302',
				},
				{
					icon: 'fa-envelope',
					data: 'hola@hotmail.com',
				},
				{
					icon: 'fa-brands fa-whatsapp',
					data: '+54 11 4444-4444',
				},
			],
		},
		{
			name: 'Virrey del pino',
			data: [
				{
					icon: 'fa-map-marker-alt',
					data: 'Av. Virrey del pino 217',
				},
				{
					icon: 'fa-phone',
					data: '+54 11 4453-1262',
				},
				{
					icon: 'fa-envelope',
					data: 'holav@hotmail.com',
				},
				{
					icon: 'fa-brands fa-whatsapp',
					data: '+54 11 9999-9999',
				},
			],
		},
		{
			name: 'Congreso',
			data: [
				{
					icon: 'fa-map-marker-alt',
					data: 'Av. Congreso 217',
				},
				{
					icon: 'fa-phone',
					data: '4444-4444',
				},
				{
					icon: 'fa-envelope',
					data: 'holac@hotmail.com',
				},
				{
					icon: 'fa-brands fa-whatsapp',
					data: '+54 11 5555-5555',
				},
			],
		},
	]

	return (
		<section className='contact'>
			<div className='content'>
				<Title title='No dudes en ' titleColor='contactarnos!' />
				<div className='data'>
					<ul className='addresses'>
						{addresses.map((address, id) => {
							return (
								<li className='address' key={id}>
									<Title
										subtitle='sede '
										subtitleColor={address.name}
									/>
									{address.data.map((data, id) => {
										console.log(
											data.icon.includes('envelope')
										)
										return (
											<div
												className='address-info'
												key={id}
											>
												{data.icon.includes(
													'brands'
												) ? (
													<a
														className='address__link'
														href={`https://api.whatsapp.com/send?phone=${data.data}&text=Hola, quisiera conocer más sobre la sede de ${address.name} y sus planes`}
														target='_blank'
														rel='noreferrer'
													>
														<i
															className={
																data.icon
															}
														></i>
														<span className='address__text'>
															{data.data}
														</span>
													</a>
												) : (
													<i
														className={`fas ${data.icon}`}
													></i>
												)}
												{!data.icon.includes(
													'brands'
												) && (
													<span className='address__text'>
														{data.data}
													</span>
												)}
											</div>
										)
									})}
								</li>
							)
						})}
					</ul>
					<Form />
				</div>
				<iframe
					className='map'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.814372755979!2d-58.44601238224668!3d-34.59386370184855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f5f1c2fecb%3A0x40f071206e1d9efa!2sMegatlon%20Villa%20Crespo!5e0!3m2!1ses-419!2sar!4v1649247582069!5m2!1ses-419!2sar'
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</section>
	)
}
