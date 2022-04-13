import fitcombatImg from "../assets/Activities/fitcombat.jpg";
import spinningImg from "../assets/Activities/spinning.jpg";
import crossfitImg from "../assets/Activities/crossfit.jpg";
import fitnessImg from "../assets/Activities/fitness.jpg";
import zumbaImg from "../assets/Activities/zumba.jpg";
import yogaImg from "../assets/Activities/yoga.jpg";

export const useClasses = () => {
    const classes = [
        {
            name: "musculacion",
            description: "lore",
            image: fitnessImg,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae culpa laboriosam aut cum fugiat sapiente id voluptate eaque reprehenderit? Rem ipsum, quis nihil nam maiores repellendus accusamus non doloremque?",
            color: "gray",
            activeDays: ["Lunes", "Martes"],
            activeHours: [0, 1, 2],
            duration: 60,
            features: [
                {
                    icon: "fa-solid fa-clock",
                    iconText: "60 minutos"
                },
                {
                    icon: "fa-solid fa-fire-flame-curved",
                    iconText: "Intenso"
                },
                {
                    icon: "fa-solid fa-heart-pulse",
                    iconText: "Cardio"
                }
            ]
        },
        {
            name: "crossfit",
            description: "lore",
            image: crossfitImg,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae culpa laboriosam aut cum fugiat sapiente id voluptate eaque reprehenderit? Rem ipsum, quis nihil nam maiores repellendus accusamus non doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae culpa laboriosam aut cum fugiat sapiente id voluptate eaque reprehenderit? Rem ipsum, quis nihil nam maiores repellendus accusamus non doloremque?",
            color: "aqua",
            activeDays: ["Miercoles", "Jueves"],
            activeHours: [3, 4],
            duration: 60,
            features: [
                {
                    icon: "fa-solid fa-clock",
                    iconText: "60 minutos"
                },
                {
                    icon: "fa-solid fa-fire-flame-curved",
                    iconText: "Intenso"
                },
                {
                    icon: "fa-solid fa-heart-pulse",
                    iconText: "Cardio"
                }
            ]
        },
        {
            name: "yoga",
            description: "lore",
            image: yogaImg,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae culpa laboriosam aut cum fugiat sapiente id voluptate eaque reprehenderit? Rem ipsum, quis nihil nam maiores repellendus accusamus non doloremque?",
            color: "blue",
            activeDays: ["Viernes", "Sabado"],
            activeHours: [3, 4],
            duration: 30,
            features: [
                {
                    icon: "fa-solid fa-clock",
                    iconText: "30 minutos"
                },
                {
                    icon: "fa-solid fa-fire-flame-curved",
                    iconText: "Intenso"
                },
                {
                    icon: "fa-solid fa-heart-pulse",
                    iconText: "Cardio"
                }
            ]
        },
        {
            name: "spinning",
            description: "lore",
            image: spinningImg,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae culpa laboriosam aut cum fugiat sapiente id voluptate eaque reprehenderit? Rem ipsum, quis nihil nam maiores repellendus accusamus non doloremque?",
            color: "green",
            activeDays: ["Jueves", "Viernes", "Sabado"],
            activeHours: [0, 1, 2],
            duration: 90,
            features: [
                {
                    icon: "fa-solid fa-clock",
                    iconText: "90 minutos"
                },
                {
                    icon: "fa-solid fa-fire-flame-curved",
                    iconText: "Intenso"
                },
                {
                    icon: "fa-solid fa-heart-pulse",
                    iconText: "Cardio"
                }
            ]
        },
        {
            name: "zumba",
            description: "lore",
            image: zumbaImg,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae culpa laboriosam aut cum fugiat sapiente id voluptate eaque reprehenderit? Rem ipsum, quis nihil nam maiores repellendus accusamus non doloremque?",
            color: "orange",
            activeDays: ["Miercoles"],
            activeHours: [1, 2],
            duration: 60,
            features: [
                {
                    icon: "fa-solid fa-clock",
                    iconText: "60 minutos"
                },
                {
                    icon: "fa-solid fa-fire-flame-curved",
                    iconText: "Intenso"
                },
                {
                    icon: "fa-solid fa-heart-pulse",
                    iconText: "Cardio"
                }
            ]
        },
        {
            name: "fitcombat",
            description: "lore",
            image: fitcombatImg,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae culpa laboriosam aut cum fugiat sapiente id voluptate eaque reprehenderit? Rem ipsum, quis nihil nam maiores repellendus accusamus non doloremque?",
            color: "red",
            activeDays: ["Lunes", "Miercoles", "Viernes"],
            activeHours: [6],
            duration: 120,
            features: [
                {
                    icon: "fa-solid fa-clock",
                    iconText: "120 minutos"
                },
                {
                    icon: "fa-solid fa-fire-flame-curved",
                    iconText: "Intenso"
                },
                {
                    icon: "fa-solid fa-heart-pulse",
                    iconText: "Cardio"
                }
            ]
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

    return {classes, getObjectClass, filterObjectClass, checkClassName}
}