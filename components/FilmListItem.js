import Link from 'next/link'
import styles from '../styles/FilmListItem.module.scss'
import { RiStarFill, RiStarLine } from 'react-icons/ri'

const FilmListItem = ({ 
        film, 
        filmIsFavourite, 
        addFilmToFavourites, 
        removeFilmFromFavourites 
    }) => {
    return (
        <li className={styles.filmListItem}>
            <Link href="/film/[id]" as={`/film/${film.uid}`}>
                <h4>Episode {film.properties.episode_id}</h4>
                <h2>{film.properties.title}</h2>
            </Link>
            { filmIsFavourite ?
                <button 
                    title='Remove from Favourites'
                    className={styles.faveButton} 
                    onClick={() => removeFilmFromFavourites(film.properties.episode_id)}
                    ><RiStarFill fontSize={'2rem'} /></button>
                :
                <button 
                    title='Add to Favourites'
                    className={styles.faveButton} 
                    onClick={() => addFilmToFavourites(film.properties.episode_id)}
                    ><RiStarLine fontSize={'2rem'} /></button>
                }
        </li>
    )
}

export default FilmListItem