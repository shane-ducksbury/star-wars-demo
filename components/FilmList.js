import FilmListItem from "./FilmListItem"

const FilmList = ({ allFilms }) => {
    return (
        <ul>
            { allFilms.map(film => <FilmListItem key={film._id} film={film} />)}
        </ul>
    )
}

export default FilmList
