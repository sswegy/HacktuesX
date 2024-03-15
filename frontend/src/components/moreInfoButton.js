export default function MoreInfoButton({ sideMoreInfoVisible, setSideMoreInfoVisible }) {
    const handleClick = () => {
        setSideMoreInfoVisible({...sideMoreInfoVisible}, true);
    }
    return (
        <>
            <button className="more-info-button" onClick={handleClick}>More Info</button>
        </>
    )
}