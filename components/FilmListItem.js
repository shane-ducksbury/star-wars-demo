import Link from 'next/link'

const FilmListItem = ({ film, addFilmToFavourites, removeFilmFromFavourites }) => {
    return (
        <li>
            <Link href="/film/[id]" as={`/film/${film.properties.episode_id}`}>{film.properties.title}</Link>
            <button onClick={() => addFilmToFavourites(film.properties.episode_id)}>Add To Favourites</button>
            <button onClick={() => removeFilmFromFavourites(film.properties.episode_id)}>Remove From Favourites</button>
        </li>
    )
}

export default FilmListItem