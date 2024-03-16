import MoreInfoButton from "./moreInfoButton.js";


export default function SideInfoCell({ fishName, fishImageSource, index, setSideMoreInfoVisible }) {
    return (
        <div className="side-info-bar-cell">
            <img className="side-info-bar-image" src={fishImageSource} />
            <div className="side-info-bar-name-overlay">{fishName}</div>
            <MoreInfoButton index={index} setSideMoreInfoVisible={setSideMoreInfoVisible}/>
        </div>
    )
}