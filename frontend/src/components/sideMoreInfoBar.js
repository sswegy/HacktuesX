import CloseMoreInfoBarButton from "./closeMoreInfoBarButton.js";

export default function SideMoreInfoBar({ fishName, fishImageSource, fishData, index, setSideMoreInfoVisible }) {
    return (
        <div className="side-more-info-bar-container">
            <div className="side-more-info-bar-title">
                <h1>{fishName}</h1> 
                <CloseMoreInfoBarButton setSideMoreInfoVisible={setSideMoreInfoVisible} />
            </div>
           
            <img className="side-more-info-bar-image" src={fishImageSource} />
            <div className="side-more-info-bar-text">
                {fishData}
            </div>
        </div>
    )
}