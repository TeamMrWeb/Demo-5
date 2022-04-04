export default function Gallery({ images }) {
  return (
    <section className="gallery-section">
        <div className="gallery-header">
            <h1 className="gallery__title">Galeria del gimnasio</h1>
            <p className="gallery__description">Fotos del gimnasio</p>
        </div>
        <div className="gallery-container">
            {images.map((image, index) => (
                <div className="gallery-item" key={index}>
                    <img className="gallery-img" src={image} alt="gallery" />
                </div>
            ))}
        </div>
    </section>
  )
}
