import { useTable } from "../hooks/useTable";

export default function Table({classes}){
    const {days, hours, hourDetails, getCellActiveColor, getCellActiveText} = useTable(classes)

    const pushCells = (hour) => {
        let cells = [];
        cells.push( <td key={hour} className="table-body-left">{hour} <span className="tooltip">{hourDetails[hour]}</span></td> )
        cells.push(
            days.slice(1).map((day, index) => (
                <td key={index} style={getCellActiveColor(day, hour)} className={`table-body-cell ${getCellActiveColor(day, hour).color}`}> <span className="tooltip">{getCellActiveText(day, hour)}</span> </td>
            ))
        )
        return cells
    }

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
                        {pushCells(hour)}
                    </tr>
                ))}
            </tbody>
        </table>
  )
}