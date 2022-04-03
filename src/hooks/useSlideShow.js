import { useEffect } from "react"

export const useSlideShow = (backgroundImg, setBackgroundImg) => {
    useEffect(() => {
        const interval = setInterval(() => {
            changeBackgroundImg("right")
        }, (4000))
        return () => clearInterval(interval)
    }, [backgroundImg]);

    const changeBackgroundImg = (direction) => {
        switch (direction) {
            case "left":
                console.log(backgroundImg)
                if(backgroundImg === 0) setBackgroundImg(3)
                else setBackgroundImg(backgroundImg => backgroundImg - 1)
                break;
            case "right": 
                if(backgroundImg === 3) setBackgroundImg(0)
                else setBackgroundImg(backgroundImg => backgroundImg + 1)
                break;
            default:
                break;
        }
    }

    return {changeBackgroundImg}
}
