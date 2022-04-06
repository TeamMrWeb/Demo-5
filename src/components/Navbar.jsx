import { useState } from "react"
import { Link as RouterLink } from "react-router-dom";
import { Link } from 'react-scroll'

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const [burgerMenu, setBurgerMenu] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const fixNavbar = () => {
        if(window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', fixNavbar)

    window.onclick = (event) => {
        console.log(event.target.className)
        if(dropdown && event.target.className !== 'list__title' && event.target.className !== 'fa-solid fa-angle-down' && event.target.className !== 'dropdown__link' && event.target.className !== 'dropdown__item') {
            setDropdown(false)
        }
    }

    return (
        <nav className={navbar ? "navbar active" : "navbar"}>
            <div className="content">
                <img className="logo" src="#/" alt="logo" />
                <ul className={burgerMenu ? "list active" : "list"}>
                    <li className="list__item--home list__item">
                        <div className="home-container" onClick={() => {dropdown ? setDropdown(false) : setDropdown(true)}}>
                            <span className="list__title">Inicio</span>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <ul className={dropdown ? "dropdown active" : "dropdown"}>
                            <Link activeClass="active" className="dropdown__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}>
                                <li className="dropdown__item">
                                    <span className="dropdown__title">Bienvenida</span>
                                </li>
                            </Link>
                            <Link activeClass="active" className="dropdown__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}>
                                <li className="dropdown__item">
                                    <span className="dropdown__title">Actividades</span>
                                </li>
                            </Link>
                            <Link activeClass="active" className="dropdown__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}>
                                <li className="dropdown__item">
                                    <span className="dropdown__title">Galería</span>
                                </li>
                            </Link>
                            <Link activeClass="active" className="dropdown__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}>
                                <li className="dropdown__item">
                                    <span className="dropdown__title">Planes</span>
                                </li>
                            </Link>
                            <Link activeClass="active" className="dropdown__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}>
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
                    <RouterLink className="list__link" to="#/">
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
