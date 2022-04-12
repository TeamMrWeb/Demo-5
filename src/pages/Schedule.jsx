import { useClasses } from '../hooks/useClasses';

import Title from '../components/Title';
import Table from '../components/Table';

export default function Schedule() {
	const { classes } = useClasses();
  	return (
		<section className="schedule-section">
			<div className="schedule-container">
				<div className="schedule-header">
					<Title title="Calendario del" titleColor=" gimnasio" subtitle="Horarios por cada " subtitleColor="dia"  />
				</div>
				<div className="schedule-content">
					<Table classes={classes}/>
				</div>
			</div>
		</section>
  	)
}
