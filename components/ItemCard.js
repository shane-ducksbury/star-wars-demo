import styles from '../styles/ItemCard.module.scss'
import Tooltip from './Tooltip'
import { useState } from 'react'

const ItemCard = ({ itemShortInfo, itemType }) => {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <li>
            <section className={styles.card} 
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                >
                <h4>{itemShortInfo.name}</h4>
            </section>
            { itemType === 'character'
            ? <Tooltip showTooltip={showTooltip} itemInfoUrl={itemShortInfo.url} />
            : null }
        </li>
    )
}

export default ItemCard