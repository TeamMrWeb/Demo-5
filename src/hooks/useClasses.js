
import muscleimg from "../assets/Activities/muscle.png";
import fitnessimg from "../assets/Activities/fitness.png"
import yogaimg from "../assets/Activities/yoga.png"
import spinningimg from "../assets/Activities/spinning.png"
import zumbaimg from "../assets/Activities/zumba.png"
import fitcombatimg from "../assets/Activities/fitcombat.png"

export const useClasses = () => {
    const classes = [
        {
            name: "musculacion",
            description: "lore",
            image: muscleimg,
            color: "gray",
            activeDays: ["Lunes", "Martes"],
            activeHours: [0, 1, 2]
        },
        {
            name: "fitness",
            description: "lore",
            image: fitnessimg,
            color: "aqua",
            activeDays: ["Miercoles", "Jueves"],
            activeHours: [3, 4]
        },
        {
            name: "yoga",
            description: "lore",
            image: yogaimg,
            color: "blue",
            activeDays: ["Viernes", "Sabado"],
            activeHours: [3, 4]
        },
        {
            name: "spinning",
            description: "lore",
            image: spinningimg,
            color: "green",
            activeDays: ["Jueves", "Viernes", "Sabado"],
            activeHours: [0, 1, 2]
        },
        {
            name: "zumba",
            description: "lore",
            image: zumbaimg,
            color: "orange",
            activeDays: ["Miercoles"],
            activeHours: [1, 2]
        },
        {
            name: "fitcombat",
            description: "lore",
            image: fitcombatimg,
            color: "red",
            activeDays: ["Lunes", "Miercoles", "Viernes"],
            activeHours: [6]
        }
    ]
    
    const filterObjectClass = (className) => {
        return classes.filter(element => element.name === className)
    }

    const getObjectClass = (className) => {
        return classes.find(element => element.name === className)
    }

    const checkClassName = (className) => {
        return classes.find(element => element.name === className) ? true : false
    }

    return { classes, getObjectClass, filterObjectClass, checkClassName };
}