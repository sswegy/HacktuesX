export default function MoreInfoButton({ sideMoreInfoVisible, setSideMoreInfoVisible }) {
    const handleClick = () => {
        setSideMoreInfoVisible({fishInfo: {...sideMoreInfoVisible}, isVisible: true});
    }
    return (
        <>
            <button className="more-info-button" onClick={handleClick}>More Info</button>
        </>
    )
}