import Card from "../components/Card"
import Title from "../components/Title"

import muscle from "../assets/Activities/muscle.png"
import fitness from "../assets/Activities/fitness.png"
import yoga from "../assets/Activities/yoga.png"
import spinning from "../assets/Activities/spinning.png"
import zumba from "../assets/Activities/zumba.png"
import fitcombat from "../assets/Activities/fitcombat.png"

export default function Classes() {
    return (
        <section className="classes-section">
            <div className="classes-container">
                <div className="classes-header">
                    <Title title="Conoce todas las" titleColor=" actividades" />
                </div>
                <div className="classes-content">
                    <div className="classes-cards">
                        <Card
                            title={"Musculación"}
                            backgroundImage={muscle}
                            backgroundColor={"#292D34"}
                            paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                            buttonEnabled={true}
                            buttonText={"Descubrir"}
                            buttonLink={"/clases/bodyshaping"}
                        />
                        <Card
                            title={"Fitness"}
                            backgroundImage={fitness}
                            backgroundColor={"#292D34"}
                            paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                            buttonEnabled={true}
                            buttonText={"Descubrir"}
                            buttonLink={"/clases/extreme_fitness"}
                        />
                        <Card
                            title={"Yoga"}
                            backgroundImage={yoga}
                            backgroundColor={"#292D34"}
                            paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                            buttonEnabled={true}
                            buttonText={"Descubrir"}
                            buttonLink={"/clases/yoga "}
                        />
                        <Card
                            title={"Spinning"}
                            backgroundImage={spinning}
                            backgroundColor={"#292D34"}
                            paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                            buttonEnabled={true}
                            buttonText={"Descubrir"}
                            buttonLink={"/clases/spinning"}
                        />
                        <Card
                            title={"Zumba"}
                            backgroundImage={zumba}
                            backgroundColor={"#292D34"}
                            paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                            buttonEnabled={true}
                            buttonText={"Descubrir"}
                            buttonLink={"/clases/zumba"}
                        />
                        <Card
                            title={"Fit Combat"}
                            backgroundImage={fitcombat}
                            backgroundColor={"#292D34"}
                            paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                            buttonEnabled={true}
                            buttonText={"Descubrir"}
                            buttonLink={"/clases/fit_combat"}
                        />
                    </div>
                </div>
            </div> 
        </section>
  )
}
