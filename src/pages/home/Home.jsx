import { useRef } from "react";
import Activities from "./sections/Activities";
import Welcome from "./sections/Welcome";
import DivisorLine from "../../components/DivisorLine";
import Gallery from "../../components/Gallery";
import image1 from "../../assets/gallery/image1.jpg";
import image2 from "../../assets/gallery/image2.jpg";
import image3 from "../../assets/gallery/image3.jpg";
import image4 from "../../assets/gallery/image4.jpg";
import image5 from "../../assets/gallery/image5.jpg";
import image6 from "../../assets/gallery/image6.jpg";
import Plans from "./sections/Plans";

export default function Home() {
    const galleryImages = [image1, image2, image3, image4, image5, image6];
    const backgroundContainer = useRef(null);

    return (
        <section className="home" ref={backgroundContainer}>
            <Welcome backgroundContainer={backgroundContainer} />
            <Activities />
            <DivisorLine firstColor={"#242a35"} secondColor={"#0f141c"} />
            <Gallery images={galleryImages} />
            <Plans />
        </section>
    )
}
