import { useState, useRef } from "react";
import { useSlideShow } from "../../hooks/useSlideShow";
import Button from '../../components/Button';
import Card from "../../components/Card";
import Welcome from "./sections/Welcome";

// Gallery images
import Gallery from "../../components/Gallery";
import image1 from "../../assets/gallery/image1.jpg";
import image2 from "../../assets/gallery/image2.jpg";
import image3 from "../../assets/gallery/image3.jpg";
import image4 from "../../assets/gallery/image4.jpg";
import image5 from "../../assets/gallery/image5.jpg";
import image6 from "../../assets/gallery/image6.jpg";

export default function Home() {
    const galleryImages = [image1, image2, image3, image4, image5, image6];
    const backgroundContainer = useRef(null);

    return (
        <section className="home" ref={backgroundContainer}>
            <Welcome backgroundContainer={backgroundContainer} />
            <div className="activities">
                <div>
                </div>
                <div className="cards">
                    <Card paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?" />
                </div>
                <Button text="Conocer más" />
            </div>
            <Gallery images={galleryImages} />
        </section>
    )
}
