export default function CloseMoreInfoBarButton({ setSideMoreInfoVisible }) {
    const handleClick = () => {
        setSideMoreInfoVisible(false);
    }
    return (
        <>
            <button className="close-more-info-button" onClick={handleClick}>Close</button>
        </>
    )
}