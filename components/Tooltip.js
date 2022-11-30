import { useEffect, useState } from 'react'
import styles from '../styles/Tooltip.module.scss'

const Tooltip = ({ showTooltip, itemInfoUrl }) => {
    const [itemData, setItemData] = useState(null)

    useEffect(() => {
        const fetchTooltipInfo = async() => {
            const res = await fetch(itemInfoUrl);
            const data = await res.json()
            setItemData(data.result)
        }

        if(showTooltip){
            fetchTooltipInfo()
        }
    },[showTooltip])

    return (
        <div className={`${styles.tooltip} ${showTooltip ? styles.show : styles.hide}`}>
            {itemData ? 
            <>
                <p>Name: {itemData.properties.name}</p>
                <p>Birth Year: {itemData.properties.birth_year}</p>
                <p>Eye Colour: {itemData.properties.eye_color}</p>
                <p>Hair Colour: {itemData.properties.hair_color}</p>
                <p>Gender: {itemData.properties.gender}</p>
            </>
            : <p>Loading</p>}
        </div>
    )
}

export default Tooltip