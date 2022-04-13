import { useState, useEffect } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { useClasses } from "../hooks/useClasses";
import { base_url } from "../../config";
import Table from "../components/Table";
import Title from "../components/Title";
import NotFound from "./NotFound";
import Button from "../components/Button";

export default function Class() {
    const {getObjectClass, filterObjectClass, checkClassName} = useClasses();
    const [name, setName] = useState("")
    let location = useLocation();

    useEffect(() => {
        const name = location.search.split("=")[1]
        setName(name)
    }, [name])
    
    if(!checkClassName(name)) return <NotFound description={"La clase que buscas no existe."}/>
    
    return (
        <section className="class">
            <div className="container">
                <div className="class-header">
                    <Title title="Clase de " titleColor={name} />
                    <Button text="Volver a Actividades" to={`${base_url}/actividades`} />
                </div>
                <div className="content">
                    <div className="info">
                        <p className="info__description">{getObjectClass(name).description}</p>   
                        <ul className="features">
                            {
                                getObjectClass(name).features.map((feature, id) => {
                                    return (
                                        <li className="feature" key={id}>
                                            <i className={feature.icon}></i>
                                            <span className="feature__text">{feature.iconText}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="image-container">
                        <img className="class__image" src={getObjectClass(name).image} alt={`clase-de-${name}-referencia-ejercicio`} />
                    </div>
                </div>
                <aside className="schedule">
                    <Title title="Horarios" titleColor=" disponibles" />
                    <Table classes={filterObjectClass(name)} />
                </aside>
            </div>
        </section>
    )
}