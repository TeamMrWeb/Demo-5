export default function Contact() {
    const contact = [
        {
            title: "Horarios",
            icon: "fa-clock",
            data: "Lunes a Viernes de 9:00 a 21:00"
        },
        {
            title: "Dirección",
            icon: "fa-location-dot",
            data: "Tachancka 2819, CABA, Argentina"
        },
        {
            title: "Correo electrónico",
            icon: "fa-envelope",
            data: "tachancka@gmail.com"
        },
        {
            title: "Teléfono",
            icon: "fa-phone",
            data: "+54 11 4444-4444"
        }
    ]

    return (
        <div className="contact">
            <div className="content">
                <div className="info">
                    <h1 className="title">Información de <b className="title-color">contacto</b></h1>
                    <ul className="list">
                        {
                            contact.map((item, id) => {
                                return (
                                    <li className="list__item" key={id}>
                                        <header className="header">
                                            <i className={"fa-solid " + item.icon}></i>
                                            <span className="list__title">{item.title}</span>
                                        </header>
                                        <span className="list__data">{item.data}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.814372755979!2d-58.44601238224668!3d-34.59386370184855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f5f1c2fecb%3A0x40f071206e1d9efa!2sMegatlon%20Villa%20Crespo!5e0!3m2!1ses-419!2sar!4v1649247582069!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
