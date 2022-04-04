import { Link } from "react-router-dom"
import Button from "../components/Button"

export default function NotFound() {
    return (
        <div style={{"height": "100%"}}>
            <h1 style={{ color: "red", fontSize: 100 }}>404 Not found</h1>
            <Link to={"/"}>
                <Button text={"Volver al inicio"} to={"/"}></Button>
            </Link>
        </div>
    )
}
