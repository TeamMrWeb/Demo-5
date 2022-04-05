import Button from "../../../components/Button";
import Card from "../../../components/Card";
import image1 from "../../../assets/Activities/image1.png"

export default function Activities() {
    return (
        <div className="activities">
            <div className="cards">
                <Card paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?" />
                <Card paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?" />
                <Card paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur nulla ab accusantium ea eos, blanditiis cum, enim amet soluta doloribus rem? Nulla odio corrupti a illo non, nemo accusantium?" />
            </div>
            <Button text="Conocer más" />
            <img className="activities__image" src={image1} alt="girlActivity" />
        </div>
    )
}
