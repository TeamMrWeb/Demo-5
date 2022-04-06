export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-text">
                    <span>Parches</span> © {new Date().getFullYear()} - Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}