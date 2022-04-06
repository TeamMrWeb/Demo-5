import mainFigure from "../assets/figure.png"
import Card from "../components/Card"
export default function About() {
  return (
    <section className="about-section">
        <div className="about-container">
            <div className="about-header">
                <div className="about-left">
                    <img className="about__image" src={mainFigure} alt="mainFigure" />
                </div>
                <div className="about-right">
                    <h1 className="about__title"> Nuestro entrenadores <span className="title-color">profesionales</span> </h1>
                    <h2 className="about__subtitle"> En <span className="title-color">gimnasio</span> <span className="text-white">Tachanka</span> contamos con los mejores <span className="title-color">profesores</span> para que alcances tu cuerpo <span className="text-white">soñado</span> </h2>
                    <p className="about__description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consequuntur velit, perspiciatis culpa explicabo nobis perferendis voluptatibus a sapiente dignissimos modi magni, atque, obcaecati beatae iure eaque cumque commodi illum.</p>
                </div>
            </div>
            <div className="about-content">
                <h1 className="about__title"> Nuestro <span className="title-color">entrenadores</span> </h1>
                <div className="about-cards">
                    <Card
                        title={"Juan Perez"}
                        backgroundImage={mainFigure}
                        backgroundColor={"#f5f5f5"}
                        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                    />
                    <Card
                        title={"Juan Quispe"}
                        backgroundImage={mainFigure}
                        backgroundColor={"#939393"}
                        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                    />
                    <Card
                        title={"Juan Borgoño"}
                        backgroundColor={"#181818"}
                        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
