import { base_url } from "../../../../config";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import fitness from "../../../assets/Activities/fitness.png";
import image1 from "../../../assets/Activities/image1.png";
import muscle from "../../../assets/Activities/muscle.png";
import yoga from "../../../assets/Activities/yoga.png";


export default function Activities() {
    return (
        <div className="activities">
            <div name="activities" className="scroll"></div>
            <div className="cards">
                <Card
                    title={"Musculación"}
                    backgroundImage={muscle}
                    backgroundColor={"#292D34"}
                    paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                    buttonEnabled={true}
                    buttonText={"Descubrir"}
                    buttonLink={`/${base_url}/actividad?name=musculacion`}
                />
                <Card
                    title={"Crossfit"}
                    backgroundImage={fitness}
                    backgroundColor={"#292D34"}
                    paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                    buttonEnabled={true}
                    buttonText={"Descubrir"}
                    buttonLink={`/${base_url}/actividad?name=crossfit`}
                />
                <Card
                    title={"Yoga"}
                    backgroundImage={yoga}
                    backgroundColor={"#292D34"}
                    paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                    buttonEnabled={true}
                    buttonText={"Descubrir"}
                    buttonLink={`/${base_url}/actividad?name=yoga`}
                />
            </div>
            <Button text="Conocer más" to={"/actividades"} />
            <img className="activities__image" src={image1} alt="girlActivity" />
        </div>
    )
}
