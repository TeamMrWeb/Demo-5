import Title from "./Title";

export default function Gallery({ images }) {
  return (
    <section className="gallery-section">
        <div name="gallery" className="scroll"></div>
        <div className="content">
            <Title title="Nuestra " titleColor="galeria" subtitle="Fotos del " subtitleColor="gimnasio" />
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img className="gallery-img" src={image} alt="gallery" />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
