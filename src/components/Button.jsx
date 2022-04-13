import { Link } from "react-router-dom";

export default function Button({text, to}) {
    return (
        <Link className="button" to={to ? to : "#/"}>{text}</Link>
    )
}