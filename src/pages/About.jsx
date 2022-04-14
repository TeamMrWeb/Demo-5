import Title from "../components/Title";
import Card from "../components/Card";
import santiago from "../assets/about/santiago.png";
import micaela from "../assets/about/micaela.png";
import workout from "../assets/about/workout.png";
import erick from "../assets/about/erick.png";
import mainFigure from "../assets/figure.png";

export default function About() {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-header">
                    <div className="about-left">
                        <img className="about__image" src={mainFigure} alt="" />
                        <img className="about__image--front" src={workout} alt="" />
                    </div>
                    <div className="about-right">
                        <Title 
                            title="Nuestro entrenadores" 
                            titleColor=" 100% dedicados a ti" 
                            subtitle={"En gimnasio Tachanka contamos con los mejores profesores para que alcances tu cuerpo"} 
                            subtitleColor={" soñado"}
                        />
                        <p className="about__description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consequuntur velit, perspiciatis culpa explicabo nobis perferendis voluptatibus a sapiente dignissimos modi magni, atque, obcaecati beatae iure eaque cumque commodi illum. <br />  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consequuntur velit, perspiciatis culpa explicabo nobis perferendis voluptatibus a sapiente dignissimos modi magni, atque, obcaecati beatae iure eaque cumque commodi illum.</p>
                    </div>
                </div>
                <div className="about-content">
                    <Title title="Nuestro" titleColor=" entrenadores" />
                    <div className="about-cards">
                        <Card
                            title={"Erick Quispe"}
                            backgroundImage={erick}
                            backgroundColor={"#181818"}
                            paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                        />
                        <Card
                            title={"Santiago Capdevila"}
                            backgroundImage={santiago}
                            backgroundColor={"#181818"}
                            paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                        />
                        <Card
                            title={"Micaela Martearena"}
                            backgroundImage={micaela}
                            backgroundColor={"#181818"}
                            paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}