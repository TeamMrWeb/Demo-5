export const useNavbar = (setNavbar, dropdown, setDropdown) => {
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
        if(document.getElementsByClassName('home-container')[0].contains(event.target)) dropdown ? setDropdown(false) : setDropdown(true)
        if(dropdown && event.target.className !== 'list__title' && event.target.className !== 'fa-solid fa-angle-down' && event.target.className !== 'dropdown active' && event.target.className !== 'dropdown__link' && event.target.className !== 'dropdown__item') {
            setDropdown(false)
        }
    }
}
