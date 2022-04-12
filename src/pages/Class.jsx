import { useState, useEffect} from "react"
import { useLocation } from "react-router-dom"
import { useClasses } from "../hooks/useClasses";

import NotFound from "./NotFound";
import Title from "../components/Title"
import Table from "../components/Table";


export default function Class() {
    let location = useLocation();

    const { getObjectClass, filterObjectClass, checkClassName } = useClasses();
    const [name, setName] = useState("")

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
                        <Table classes={filterObjectClass(name)} />
                    </div>
                </div>
            </div>
        </section>
    )
}
