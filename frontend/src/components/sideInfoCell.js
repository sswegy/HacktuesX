import dummyImage from "../data/dummy/fish.png";
import MoreInfoButton from "./moreInfoButton.js";


export default function SideInfoCell({ fishName, fishImageSource, sideMoreInfoVisible, setSideMoreInfoVisible }) {
    return (
        <div className="side-info-bar-cell">
            <img className="side-info-bar-image" src={fishImageSource} />
            <div className="side-info-bar-name-overlay">{fishName}</div>
            <MoreInfoButton sideMoreInfoVisible={sideMoreInfoVisible} setSideMoreInfoVisible={setSideMoreInfoVisible}/>
        </div>
    )
}