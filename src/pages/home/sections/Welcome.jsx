import { useRef } from "react";
import Carousel from "../../../components/Carousel";
import Button from "../../../components/Button";
import figure from '../../../assets/figure.png';

export default function Welcome() {
    const backgroundContainer = useRef(null);

    return (
        <div className="welcome" ref={backgroundContainer}>
            <div name="welcome" className="scroll"></div>
            <div className="row-card">
                <img className="figure" src={figure} alt="figure" />
                <div className="info">
                    <h2 className="row-card__title">El entrenamiento más <b className="title-color">completo</b> al mejor <b className="title-color">precio</b></h2>
                    <Button text="Únete ahora!" />
                </div>
            </div>
            <Carousel backgroundContainer={backgroundContainer} />
        </div>
    )
}
