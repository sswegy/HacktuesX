export default function MoreInfoButton({ setSideMoreInfoVisible }) {
    const handleClick = () => {
        setSideMoreInfoVisible(true);
    }
    return (
        <>
            <button className="more-info-button" onClick={handleClick}>More Info</button>
        </>
    )
}