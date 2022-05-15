import { useClasses } from '../hooks/useClasses'
import Title from '../components/Title'
import Table from '../components/Table'

export default function Schedule() {
	const { classes } = useClasses()

	return (
		<section className='schedule-section'>
			<div className='schedule-container'>
				<div className='schedule-header'>
					<Title
						title='Calendario del'
						titleColor=' gimnasio de belgrano'
						subtitle='Horarios por cada '
						subtitleColor='día'
					/>
				</div>
				<p className='schedule__description'>
					Hacer click para ver más información
				</p>
				<div className='schedule-content'>
					<Table classes={classes} />
				</div>
			</div>
		</section>
	)
}
