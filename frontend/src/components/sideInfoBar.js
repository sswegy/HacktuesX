export default function SideInfoBar({ oceanName, children }) {
    return (
        <div className="side-info-bar-container">
            <div className="side-info-bar-title">
                <h1>{oceanName}</h1>    
            </div>
            {children}
        </div>
    );
}