export default function Gallery({ images }) {
  return (
    <section className="gallery-section">
        <div name="gallery" className="scroll"></div>
        <div className="gallery-header">
            <h1 className="gallery__title title-color">Nuestra galeria</h1>
            <h4 className="gallery__subtitle">Fotos del gimnasio</h4>
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
