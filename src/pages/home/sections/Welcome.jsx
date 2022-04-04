import { useState } from "react"
import figure from '../../../assets/figure.png'
import Button from "../../../components/Button"
import { useSlideShow } from "../../../hooks/useSlideShow"

export default function Welcome({backgroundContainer}) {
    const [backgroundImg, setBackgroundImg] = useState(0)
    const {changeBackgroundImg} = useSlideShow(backgroundImg, setBackgroundImg)

    return (
        <div className="welcome">
            <div className="backgrounds-container" style={backgroundContainer.current && {transform: `translateX(${-backgroundImg * backgroundContainer.current.clientWidth }px)`}}>
                <div className="background"></div>
                <div className="background"></div>
                <div className="background"></div>
                <div className="background"></div>
            </div>
            <div className="row-card">
                <img className="figure" src={figure} alt="figure" />
                <div className="info">
                    <h2 className="row-card__title">El entrenamiento más <b className="row-card__title--color">completo</b> al mejor <b className="row-card__title--color">precio</b></h2>
                    <Button text="Únete ahora!" />
                </div>
            </div>
            <div className="slideshow">
                <button className="slideshow__button left" onClick={() => changeBackgroundImg("left")}><i className="fa-solid fa-arrow-left"></i></button>
                <ul className="list">
                    <li className={backgroundImg === 0 ? "list__item active" : "list__item"} onClick={() => setBackgroundImg(0)}></li>
                    <li className={backgroundImg === 1 ? "list__item active" : "list__item"} onClick={() => setBackgroundImg(1)}></li>
                    <li className={backgroundImg === 2 ? "list__item active" : "list__item"} onClick={() => setBackgroundImg(2)}></li>
                    <li className={backgroundImg === 3 ? "list__item active" : "list__item"} onClick={() => setBackgroundImg(3)}></li>
                </ul>
                <button className="slideshow__button right" onClick={() => changeBackgroundImg("right")}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    )
}
