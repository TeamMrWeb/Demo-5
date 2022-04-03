import figure from '../assets/figure.png';

export default function Home() {
    return (
        <section className="home">
            <div className="row-card">
                <img className="figure" src={figure} alt="figure" />
                <div className="info">
                    <h2 className="row-card__title">El entrenamiento más <b className="row-card__title--color">completo</b> al mejor <b className="row-card__title--color">precio</b></h2>
                    <button className="button">
                        <a className="button__link" href="#/">Únete ahora!</a>
                    </button>
                </div>
            </div>
        </section>
    )
}
