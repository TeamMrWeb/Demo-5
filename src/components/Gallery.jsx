import { useState, useRef, useEffect } from "react";
import Title from "./Title";

export default function Gallery({images}) {
    const [moveGallery, setMoveGallery] = useState()
    const list = useRef();
    const gap = 16

    useEffect(() => {
        // list.current.style = `transform: translateX(-${moveGallery}px)`
        moveGalleryPosition()
    }, [moveGallery])
    
    const moveGalleryPosition = () => {
        const imageWidth = document.querySelector(".gallery__item").clientWidth
        const imageTotalWidth = imageWidth + gap;
        list.current.style = `transform: translateX(-${moveGallery + imageTotalWidth}px)`
    }

    return (
        <section className="gallery">
            <div name="gallery" className="scroll"></div>
            <div className="content">
                <Title title="Nuestra " titleColor="galeria" subtitle="Fotos del " subtitleColor="gimnasio" />
                <div className="gallery-container">
                    <ul className="list" ref={list}>
                        {images.map((image, id) => (
                            <li className="gallery__item" key={id} >
                                <img className="gallery__image" src={image} alt="gymImage" />
                            </li>
                        ))}
                    </ul>
                    <button className="button" onClick={() => setMoveGallery()}>tocame1</button>
                    <button className="button" onClick={() => setMoveGallery()}>tocame2</button>
                    <button className="button" onClick={() => setMoveGallery()}>tocame3</button>
                </div>
            </div>
        </section>
    )
}
