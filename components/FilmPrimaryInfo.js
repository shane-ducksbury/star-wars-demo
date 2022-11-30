import Image from 'next/image'
import styles from '../styles/FilmPrimaryInfo.module.scss'

const FilmPrimaryInfo = ({ filmInfo }) => {
    const generateNiceDate = (dateString) => {
        const date = new Date(dateString)
        return `${date.getDate()} ${date.toLocaleString('default', {month: 'long'})}, ${date.getFullYear()}`
    }

    return (
        <section className={styles.primaryInfoWrapper}>
            <Image src={`/img/${filmInfo.episode_id}.jpg`} width={250} height={375} alt={`Poster for Star Wars Episode ${filmInfo.episode_id} `} />
            <div className={styles.primaryInfoContent}>
                <h4>Episode {filmInfo.episode_id}</h4>
                <h1>{filmInfo.title}</h1>
                <h3>Director: {filmInfo.director} </h3>
                <h3>Producers: {filmInfo.producer} </h3>
                <h3>Release Date: {generateNiceDate(filmInfo.release_date)} </h3>
            </div>
        </section>
    )
}

export default FilmPrimaryInfo