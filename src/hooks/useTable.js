
export const useTable = (classes) => {
    const days = ["Hora", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    const hours = [0, 1, 2, 3, 4, 5, 6];
    const hourDetails = ["8:00 - 9:00am", "9:00 - 10:00am", "10:00 - 11:00am", "11:00 - 12:00pm", "12:00 - 1:00pm", "1:00 - 2:00pm", "2:00 - 3:00pm"];
    
    const getCellActiveColor = (day, hour) => {
        var color = "white"
        for(const property in classes)
            if(classes[property].activeDays.includes(day) && classes[property].activeHours.includes(hour))
                color = classes[property].color
        return { backgroundColor: color }
    }

    const getCellActiveText = (day, hour) => {
        var text = "nada";
        for(const property in classes)
            if(classes[property].activeDays.includes(day) && classes[property].activeHours.includes(hour))
                text = classes[property].name
        return text
    }

    return { days, hours, hourDetails, getCellActiveColor, getCellActiveText }
}