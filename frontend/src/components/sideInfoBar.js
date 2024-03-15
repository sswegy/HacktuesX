import dummyImage from "../data/dummy/fish.png";


export default function SideInfoBar({ oceanName }) {
    return (
        <div className="side-info-bar-container">
            <div className="side-info-bar-title">
                <h1>{oceanName}</h1>    
            </div>
            <div className="side-info-bar-cell">
                <img className="side-info-bar-image" src={dummyImage} />
                <div className="side-info-name-overlay">{"asdasdas"}</div>
            </div>
        </div>
    );
}