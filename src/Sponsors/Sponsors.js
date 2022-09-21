import { patrons } from "../utils/backend"

export const Sponsors = () => {
    return (
        <div style={{maxHeight: "80px", width: "100%", backgroundColor: "#ffffff"}} className="d-flex flex-row align-items-center justify-content-evenly">
            {patrons.map((img) => {
                return <a href={img.href} target="_blank" key={img.alt} className="d-flex justify-content-center"><img src={img.src} key={img.alt} alt={img.alt} style={{maxHeight: "75px", width: "auto", maxWidth: "80%", margin: "5px 0"}} /></a>
            })}
        </div>
    )
}