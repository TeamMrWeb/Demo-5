import { useState, useRef } from "react";
import { useSlideShow } from "../../hooks/useSlideShow";
import Button from '../../components/Button';
import Card from "../../components/Card";
import Welcome from "./sections/Welcome";

export default function Home() {
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
        </section>
    )
}
