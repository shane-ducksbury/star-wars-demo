import Link from 'next/link'

const FilmListItem = ({ film }) => {
    return (
        <li><Link href="/film/[id]" as={`/film/${film.properties.episode_id}`}>{film.properties.title}</Link></li>
    )
}

export default FilmListItem