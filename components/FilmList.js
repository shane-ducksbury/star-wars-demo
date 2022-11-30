import FilmListItem from './FilmListItem'
import { useEffect, useState } from 'react'
import styles from '../styles/FilmList.module.scss'

const FilmList = ({ allFilms }) => {
    const [favourites, setFavourites] = useState([])
    const [filmList, setFilmList] = useState(allFilms)
    const [searchTerm, setSearchTerm] = useState()
    const [localStorageChecked, setLocalStorageChecked] = useState(false)

    const pushFilmToTopOfList = (id) => {
        const filmIndex = allFilms.findIndex(film => film.properties.episode_id === id)
        allFilms.unshift(allFilms.splice(filmIndex, 1)[0])
    }

    const addFilmToFavourites = (id) => {
        if(favourites.includes(id)) return

        setFavourites([...favourites, id])
        pushFilmToTopOfList(id)
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
        if(faveMovies) {
            const foundFaves = JSON.parse(faveMovies)
            setFavourites(foundFaves)
            foundFaves.forEach(fave => {
                pushFilmToTopOfList(fave)
            })
        } 
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
            <ul className={styles.filmList}>
                {filmList.map(film => 
                <FilmListItem
                    key={film._id}
                    film={film}
                    filmIsFavourite={favourites.includes(film.properties.episode_id)}
                    addFilmToFavourites={addFilmToFavourites}
                    removeFilmFromFavourites={removeFilmFromFavourites}
                />)}
            </ul>
        </>
    )
}

export default FilmList
