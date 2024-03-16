import { polygonSelectResult } from "./globeMap.js";

export default function MoreInfoButton({ index, setSideMoreInfoVisible }) {
    const handleClick = () => {
        setSideMoreInfoVisible({fishInfo: polygonSelectResult[index], isVisible: true});
    }
    return (
        <>
            <button className="more-info-button" onClick={handleClick}>More Info</button>
        </>
    )
}