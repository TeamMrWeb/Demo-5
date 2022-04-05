import Card from "../../../components/Card";

export default function Plans() {
    return (
        <div className="plans">
            <div className="content">
                <header className="header">
                    <h1 className="title-color">planes</h1>
                    <h4 className="header__subtitle">Conoce todos nuestros <span className="title-color">planes</span></h4>
                </header>
                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}
