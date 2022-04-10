import { useState, useEffect} from "react"
import { useLocation } from "react-router-dom"
import NotFound from "./NotFound";
import Title from "../components/Title"
import Table from "../components/Table";

import muscleimg from "../assets/Activities/muscle.png"
import fitnessimg from "../assets/Activities/fitness.png"
import yogaimg from "../assets/Activities/yoga.png"
import spinningimg from "../assets/Activities/spinning.png"
import zumbaimg from "../assets/Activities/zumba.png"
import fitcombatimg from "../assets/Activities/fitcombat.png"

const classes = [
    {
        title: "musculacion",
        description: "lore",
        image: muscleimg,
    },
    {
        title: "fitness",
        description: "lore",
        image: fitnessimg,
    },
    {
        title: "yoga",
        description: "lore",
        image: yogaimg,
    },
    {
        title: "spinning",
        description: "lore",
        image: spinningimg,
    },
    {
        title: "zumba",
        description: "lore",
        image: zumbaimg,
    },
    {
        title: "fitcombat",
        description: "lore",
        image: fitcombatimg,
    }
]

export default function Class() {
    let location = useLocation();

    const [name, setName] = useState("")

    function getObjectClass(className) {
        const object = classes.find(element => element.title === className)
        return object
    }


    function checkClassName(className) {
        for (let i = 0; i < classes.length; i++) 
            if (classes[i].title === className) 
                return true;
        return false;
    }

    useEffect(() => {
        const name = location.search.split("=")[1]
        setName(name)
        console.log(getObjectClass(name).image)
    }, [name])
    
    if(!checkClassName(name)) return <NotFound description={"La clase que buscas no existe."}/>

    return (
        <section className="class-section">
            <div className="class-container">
                <div className="class-header">
                    <Title title="Clase de " titleColor={name} />
                </div>
                <div className="class-content">
                    <div className="class-info">
                        <p className="class__desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae culpa laboriosam aut cum fugiat sapiente id voluptate eaque reprehenderit? Rem ipsum, quis nihil nam maiores repellendus accusamus non doloremque? </p>
                        <img className="class__img" src={getObjectClass(name).image} alt={name} />
                    </div>
                    <div className="class-schedule">
                        <Table/>
                    </div>
                </div>
            </div>
        </section>
    )
}
