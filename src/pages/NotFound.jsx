import Button from "../components/Button"
import Title from "../components/Title"
export default function NotFound() {
    return (
        <section className="nf-section">
            <Title title={"Error"} titleColor={" 404"} />
            <p className="nf__description"> La página que buscas no existe </p>
            <Button text={"Volver al inicio"} to={"/"} />
        </section>
    )
}
