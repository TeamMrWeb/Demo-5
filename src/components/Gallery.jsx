import { useState, useRef } from "react";
import Title from "./Title";

export default function Gallery({images}) {
    const maxSectionWidth = 1299;
    const gap = 10
    const pixelsToMove = maxSectionWidth + gap;
    const list = useRef();
    
    const moveGalleryPosition = (pixels) => {
        list.current.style = `transform: translateX(-${pixels}px)`
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
                    <button className="button" onClick={() => moveGalleryPosition(0)}>tocame1</button>
                    <button className="button" onClick={() => moveGalleryPosition(pixelsToMove)}>tocame2</button>
                    <button className="button" onClick={() => moveGalleryPosition(pixelsToMove*2)}>tocame3</button>
                </div>
            </div>
        </section>
    )
}
