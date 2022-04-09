import { useEffect } from "react";
import Activities from "./sections/Activities";
import Welcome from "./sections/Welcome";
import Contact from "./sections/Contact";
import Plans from "./sections/Plans";
import DivisorLine from "../../components/DivisorLine";
import Gallery from "../../components/Gallery";
import image1 from "../../assets/gallery/image1.jpg";
import image2 from "../../assets/gallery/image2.jpg";
import image3 from "../../assets/gallery/image3.jpg";
import image4 from "../../assets/gallery/image4.jpg";
import image5 from "../../assets/gallery/image5.jpg";
import image6 from "../../assets/gallery/image6.jpg";

export default function Home() {
    const galleryImages = [image1, image2, image3, image4, image5, image6, image6, image6, image6, image6, image6, image6, image6, image6, image6];

    useEffect(() => {
        document.querySelector('.dropdown').style = "visibility: visible"
        document.querySelector('.fa-angle-down').style = "visibility: visible"
    }, [])

    return (
        <section className="home" >
            <Welcome  />
            <Activities />
            <DivisorLine firstColor={"#242a35"} secondColor={"#0f141c"} />
            <Gallery images={galleryImages} />
            <div className="complementary">
                <Plans />
                <Contact />
            </div>
        </section>
    )
}
