export default function Title({ title, titleColor, subtitle, subtitleColor }) {
	return (
		<header className='header'>
			{title && (
				<h2 className='header__title'>
					{title}
					{titleColor && (
						<span className='header__title--color'>
							{titleColor}
						</span>
					)}
				</h2>
			)}
			{subtitle && (
				<h3 className='header__subtitle'>
					{subtitle}
					{subtitleColor && (
						<span className='header__subtitle--color'>
							{subtitleColor}
						</span>
					)}
				</h3>
			)}
		</header>
	)
}
