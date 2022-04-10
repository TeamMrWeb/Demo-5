export default function Table() {
    const hours = [" ", " ", 0, 1, 2, 3, 4, 5, 6];
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colspan="7">Mañana</th>
                    <th colspan="7">Tarde</th>
                </tr>
                <tr>
                    { hours.map(hour => { return <th key={hour}>{hour}</th> }) }
                    { hours.map(hour => { return <th key={hour}>{hour}</th> }) }
                </tr>
            </thead>
            <tbody>
                {
                    ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"].map(day => {
                        return (
                        <tr>
                            <tr>{day}</tr>
                            { hours.map(hour => { return <td key={hour} className={hour === " "? "table-td active": "table-td invisible"}> </td> }) }
                            { hours.map(hour => { return <td key={hour} className={hour === " " ? "table-td active": "table-td invisible"}> </td> }) }
                        </tr>
                        
                        )
                    })
                }
            </tbody>
        </table>
  )
}
