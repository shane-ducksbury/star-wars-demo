import FilmListItem from "./FilmListItem"
import { useEffect, useState } from "react"

const FilmList = ({ allFilms }) => {
    const [favourites, setFavourites] = useState([])
    const [filmList, setFilmList] = useState(allFilms)
    const [searchTerm, setSearchTerm] = useState()
    const [localStorageChecked, setLocalStorageChecked] = useState(false)

    const addFilmToFavourites = (id) => {
        if(favourites.includes(id)) return

        setFavourites([...favourites, id])
        const filmIndex = allFilms.findIndex(film => film.properties.episode_id === id)
        allFilms.unshift(allFilms.splice(filmIndex, 1)[0])
    }

    const removeFilmFromFavourites = (id) => {
        if(!favourites.includes(id)) return

        setFavourites(favourites.filter(favourite => favourite !== id))
        const filmIndex = allFilms.findIndex(film => film.properties.episode_id === id)
        allFilms.push(allFilms.splice(filmIndex, 1)[0])
    }

    const filterFilmList = (searchTerm) => {
        if(searchTerm === '') setFilmList(allFilms)
        setFilmList(allFilms.filter(film => film.properties.title.toLowerCase().includes(searchTerm)))
    }

    useEffect(() => {
        const faveMovies = localStorage.getItem('favouriteFilms')
        if(faveMovies) setFavourites(JSON.parse(faveMovies))
        setLocalStorageChecked(true)
    },[])
    
    useEffect(() => {
        if(localStorageChecked){
            localStorage.setItem('favouriteFilms', JSON.stringify(favourites))
        }
    },[favourites, localStorageChecked])

    return (
        <>
            <input onChange={e => filterFilmList(e.target.value.toLowerCase())}></input>
            <ul>
                {filmList.map(film => 
                <FilmListItem
                    key={film._id}
                    film={film}
                    addFilmToFavourites={addFilmToFavourites}
                    removeFilmFromFavourites={removeFilmFromFavourites}
                />)}
            </ul>
        </>
    )
}

export default FilmList
