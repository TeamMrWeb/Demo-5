function Card({title, paragraph}) {
    return (
        <div className="card">
            <h3 className="card__title">{title}</h3>
            <p className="card__paragraph">{paragraph}</p>
        </div>
    )
}
  
  export default Card