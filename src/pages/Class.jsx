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
        activeDays: ["Lunes", "Martes"],
        activeHours: [0, 1, 2]
    },
    {
        title: "fitness",
        description: "lore",
        image: fitnessimg,
        activeDays: ["Miercoles", "Jueves"],
        activeHours: [5]
    },
    {
        title: "yoga",
        description: "lore",
        image: yogaimg,
        activeDays: ["Viernes", "Sabado"],
        activeHours: [6]
    },
    {
        title: "spinning",
        description: "lore",
        image: spinningimg,
        activeDays: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
        activeHours: [3, 4]
    },
    {
        title: "zumba",
        description: "lore",
        image: zumbaimg,
        activeDays: ["Miercoles", "Jueves"],
        activeHours: [6]
    },
    {
        title: "fitcombat",
        description: "lore",
        image: fitcombatimg,
        activeDays: ["Lunes", "Miercoles", "Viernes"],
        activeHours: [6]
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
                    <Title title="Horarios" titleColor=" disponibles" />
                        <Table 
                            activeDays={getObjectClass(name).activeDays}
                            activeHours={getObjectClass(name).activeHours}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
