import ItemCard from "./ItemCard"
import styles from "../styles/InfoList.module.scss"

const InfoList = ({ allItemNames, filmItemUrls, itemType }) => {
    const getItemShortInfoFromURL = (characterURL) => {
        return allItemNames.find(element => element.url === characterURL)
    }
    
    return (
        <>
        <ul className={styles.itemList}>
            {filmItemUrls.map(itemUrl => {
                const item = getItemShortInfoFromURL(itemUrl)
                return(<ItemCard key={item.uid} itemShortInfo={item} itemType={itemType} />)
            })}
        </ul>
        </>
    )
}

export default InfoList