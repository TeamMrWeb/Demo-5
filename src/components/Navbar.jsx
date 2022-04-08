import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from 'react-scroll';
import { useNavbar } from "../hooks/useNavbar";
import logo from '../assets/Navbar/logo.png'

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const [burgerMenu, setBurgerMenu] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    useNavbar(setNavbar, dropdown, setDropdown)

    return (
        <nav className={navbar ? "navbar active" : "navbar"}>
            <div className="content">
                <img className="logo" src={logo} alt="logo" />
                <ul className={burgerMenu ? "list active" : "list"}>
                    <li className="list__item--home list__item">
                        <div className="home-container">
                            <span className="list__title">Inicio</span>
                            <i className={"fa-solid " + (dropdown ? "fa-angle-up" : "fa-angle-down")}></i>
                        </div>
                        <ul className={dropdown ? "dropdown active" : "dropdown"}>
                            <Link activeClass="active" className="dropdown__link" to="welcome" spy={true} isDynamic={true} smooth={true} duration={500}>
                                <li className="dropdown__item">
                                    <span className="dropdown__title">Bienvenida</span>
                                </li>
                            </Link>
                            <Link activeClass="active" className="dropdown__link" to="activities" offset={-200} spy={true} isDynamic={true} smooth={true} duration={500}>
                                <li className="dropdown__item">
                                    <span className="dropdown__title">Actividades</span>
                                </li>
                            </Link>
                            <Link activeClass="active" className="dropdown__link" to="gallery" offset={-100} spy={true} isDynamic={true} smooth={true} duration={500}>
                                <li className="dropdown__item">
                                    <span className="dropdown__title">Galería</span>
                                </li>
                            </Link>
                            <Link activeClass="active" className="dropdown__link" to="plans" spy={true} isDynamic={true} smooth={true} duration={500}>
                                <li className="dropdown__item">
                                    <span className="dropdown__title">Planes</span>
                                </li>
                            </Link>
                            <Link activeClass="active" className="dropdown__link" to="contact" offset={20} spy={true} isDynamic={true} smooth={true} duration={500}>
                                <li className="dropdown__item">
                                    <span className="dropdown__title">Contacto</span>
                                </li>
                            </Link>
                        </ul>
                    </li>
                    <RouterLink className="list__link" to="#/">
                        <li className="list__item">
                            <span className="list__title">Actividades</span>
                        </li>
                    </RouterLink>
                    <RouterLink className="list__link" to="#/">
                        <li className="list__item">
                            <span className="list__title">Clases</span>
                        </li>
                    </RouterLink>
                    <RouterLink className="list__link" to="#/">
                        <li className="list__item">
                            <span className="list__title">Nosotros</span>
                        </li>
                    </RouterLink>
                    <RouterLink className="list__link" to="/contacto">
                        <li className="list__item">
                            <span className="list__title">Contacto</span>
                        </li>
                    </RouterLink>
                </ul>
                <button className="navbar__button" onClick={() => {burgerMenu ? setBurgerMenu(false) : setBurgerMenu(true)}}><i className="fas fa-bars"></i></button>
            </div>
        </nav>
    )
}
