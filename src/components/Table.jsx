export default function Table({ activeDays, activeHours}) {
    const hours = [0, 1, 2, 3, 4, 5, 6];
    const hourDetails = ["8:00 - 9:00am", "9:00 - 10:00am", "10:00 - 11:00am", "11:00 - 12:00pm", "12:00 - 1:00pm", "1:00 - 2:00pm", "2:00 - 3:00pm"];
    const days = ["Hora", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    function is(day, hour){
        return activeDays.includes(day) && activeHours.includes(hour)
    }
    console.log(activeDays, activeHours)
    return (
        <table className="table">
            <thead className="table-head">
                <tr className="table-row">
                    {days.map((header, index) => (
                        <th key={index} className="table-head-cell">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="table-body">
                {hours.map((hour, index)  => (
                    <tr key={index} className="table-row">
                        <td className="table-body-left">{hour} <span className="tooltip">{hourDetails[hour]}</span></td>
                        {
                            days.slice(1).map((day, index) => (
                                <td key={index} className={activeDays.includes(day) && activeHours.includes(hour) ? "table-body-cell active" : "table-body-cell"} />
                            ))
                        }
                    </tr>
                ))}
            </tbody>
        </table>
  )
}
