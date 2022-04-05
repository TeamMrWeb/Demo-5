import Button from "../../../components/Button";
import Card from "../../../components/Card";
import image1 from "../../../assets/Activities/image1.png"
import bodyshaping from "../../../assets/Activities/bodyshaping.jpg"

export default function Activities() {
    return (
        <div className="activities">
            <div className="cards">
                <Card
                    title={"Body shaping"}
                    backgroundImage={bodyshaping}
                    backgroundColor={"#f5f5f5"}
                    paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                />
                <Card
                    title={"Extreme fitness"}
                    backgroundImage={bodyshaping}
                    backgroundColor={"#939393"}
                    paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                />
                <Card
                    title={"Yoga classis"}
                    backgroundColor={"#181818"}
                    paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?"
                />
            </div>
            <Button text="Conocer más" />
            <img className="activities__image" src={image1} alt="girlActivity" />
        </div>
    )
}
