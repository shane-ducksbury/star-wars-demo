import { useEffect, useState } from 'react'
import styles from '../styles/Tooltip.module.scss'

const Tooltip = ({ showTooltip, itemInfoUrl }) => {
    const [itemData, setItemData] = useState(null)

    const generateItemContent = (data) => {
        return(
            <>
                <p>Name: {data.properties.name}</p>
                <p>Birth Year: {data.properties.birth_year}</p>
                <p>Eye Colour: {data.properties.eye_color}</p>
                <p>Hair Colour: {data.properties.hair_color}</p>
                <p>Gender: {data.properties.gender}</p>
            </>
        )
    }

    const generateWait = () => {
        return(
            <div className={styles.waitBox}>
                <p>Please Wait</p>
                <p>Searching the Jedi Archives...</p>
            </div>
        )
    }

    useEffect(() => {
        const fetchTooltipInfo = async() => {
            const res = await fetch(itemInfoUrl);
            const data = await res.json()
            setItemData(data.result)
        }

        if(showTooltip){
            fetchTooltipInfo()
        }
    },[showTooltip, itemInfoUrl])

    return (
        <div className={`${styles.tooltip} ${showTooltip ? styles.show : styles.hide}`}>
            { itemData ? generateItemContent(itemData) : generateWait() }
        </div>
    )
}

export default Tooltip