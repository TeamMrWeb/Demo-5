export default function DivisorLine({firstColor, secondColor}) {
    return (
        <div className="divisor-line" style={{background: `linear-gradient(0deg, ${firstColor} 0%, ${secondColor} 100%)`}}></div>
    )
}
