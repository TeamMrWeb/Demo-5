import { useState } from "react";
import { useSlideShow } from "../hooks/useSlideShow";

export default function Carousel({backgroundContainer}) {
    const [backgroundImg, setBackgroundImg] = useState(0)
    const {changeBackgroundImg} = useSlideShow(backgroundImg, setBackgroundImg)

    return (
        <div className="carousel">
            <div className="backgrounds-container" style={backgroundContainer.current && {transform: `translateX(${-backgroundImg * backgroundContainer.current.clientWidth }px)`}}>
                <div className="background"></div>
                <div className="background"></div>
                <div className="background"></div>
                <div className="background"></div>
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
