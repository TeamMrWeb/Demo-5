export default function Card({title, paragraph, backgroundImage, backgroundColor}) {
    const opacity = !backgroundImage? 1 : 0.5;
    
    return (
        <div className="card">
            {
                backgroundImage &&
                <div className="card-background">
                    <img className="card__image" src={backgroundImage} alt="background" />
                </div>
            }
            <div className="card-filter" style={{backgroundColor, opacity}}/> 
            <div className="card-content">
                <h3 className="card__title">{title}</h3>
                <p className="card__paragraph">{paragraph}</p>
            </div>
        </div>
    )
}