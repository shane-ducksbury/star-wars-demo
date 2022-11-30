const InfoList = ({ allItemNames, filmItemUrls }) => {
    const getCharacterShortInfoFromURL = (characterURL) => {
        return allItemNames.find(element => element.url === characterURL)
    }
    
    return (
        <>
        <ul>
            {filmItemUrls.map(itemUrl => 
            {
                return(<li key={getCharacterShortInfoFromURL(itemUrl).uid}>{getCharacterShortInfoFromURL(itemUrl).name
            }
            </li>)})}
        </ul>
        </>
    )
}

export default InfoList