import { useEffect } from "react";

export const useNavbar = (setNavbar, dropdown, setDropdown, dropdownList, homeIcon) => {
    useEffect(() => {
        if(window.location.pathname !== '/') removeDropdown()
    }, [])

    const removeDropdown = () => { 
        dropdownList.current.visibility = "hidden"
        homeIcon.current.style.visibility = "hidden"
        homeIcon.current.style.position = "absolute"
    }

    const fixNavbar = () => window.scrollY >= 50 ? setNavbar(true): setNavbar(false)

    window.addEventListener('scroll', fixNavbar)

    window.onclick = (event) => {
        console.log(event.target.className)
        if(dropdown && event.target.className !== 'list__title' && event.target.className !== 'fa-solid fa-angle-down' && event.target.className !== 'dropdown active' && event.target.className !== 'dropdown__link' && event.target.className !== 'dropdown__item') {
            setDropdown(false)
        }
    }

    return {removeDropdown}
}
