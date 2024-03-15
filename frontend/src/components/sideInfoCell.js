import dummyImage from "../data/dummy/fish.png";
import MoreInfoButton from "./moreInfoButton.js";


export default function SideInfoCell() {
    return (
        <div className="side-info-bar-cell">
            <img className="side-info-bar-image" src={dummyImage} />
            <div className="side-info-bar-name-overlay">{"asdasdas"}</div>
            <MoreInfoButton />
        </div>
    )
}