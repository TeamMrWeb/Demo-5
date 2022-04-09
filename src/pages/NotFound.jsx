import Button from "../components/Button"
import Title from "../components/Title"
export default function NotFound() {
    return (
        <section className="not-found">
            <Title title={"Error"} titleColor={" 404"} />
            <span className="not-found__description"> La página que buscas no existe </span>
            <Button text={"Volver al inicio"} to={"/"} />
        </section>
    )
}
