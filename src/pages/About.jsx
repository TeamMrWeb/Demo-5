import mainFigure from "../assets/figure.png"
import Card from "../components/Card"
import Title from "../components/Title"

export default function About() {
  return (
    <section className="about-section">
        <div className="about-container">
            <div className="about-header">
                <div className="about-left">
                    <img className="about__image" src={mainFigure} alt="mainFigure" />
                </div>
                <div className="about-right">
                    <Title 
                        title="Nuestro entrenadores" 
                        titleColor=" profesionales" 
                        subtitle={"En gimnasio Tachanka contamos con los mejores profesores para que alcances tu cuerpo"} 
                        subtitleColor={" soñado"}
                    />
                    <p className="about__description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consequuntur velit, perspiciatis culpa explicabo nobis perferendis voluptatibus a sapiente dignissimos modi magni, atque, obcaecati beatae iure eaque cumque commodi illum.</p>
                </div>
            </div>
            <div className="about-content">
                    <Title 
                        title="Nuestro" 
                        titleColor=" entrenadores" 
                    />
                <div className="about-cards">
                    <Card
                        title={"Juan Perez"}
                        backgroundImage={mainFigure}
                        backgroundColor={"#181818"}
                        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                    />
                    <Card
                        title={"Juan Quispe"}
                        backgroundImage={mainFigure}
                        backgroundColor={"#181818"}
                        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                    />
                    <Card
                        title={"Juan Borgoño"}
                        backgroundImage={mainFigure}
                        backgroundColor={"#181818"}
                        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
