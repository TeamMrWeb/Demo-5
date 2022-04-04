import { Link } from "react-router-dom"
export default function Button({text, to}) {
    return (
        <button className="button">
            <Link className="button__link" to={to ? to : "#/"}>{text}</Link>
        </button>
    );
}
