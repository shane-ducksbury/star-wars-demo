import Link from "next/link"
import FilmPrimaryInfo from "../../../components/FilmPrimaryInfo"
import InfoList from "../../../components/InfoList"

const Film = ({ filmInfo, characterNames, planetNames, speciesNames, vehicleNames, starshipNames }) => {

    return (
        <main>
            <Link href='/'>Back</Link>
            <FilmPrimaryInfo filmInfo={filmInfo} />
            <hr />
            <h3>Characters</h3>
            <InfoList allItemNames={characterNames} filmItemUrls={filmInfo.characters} itemType={'character'} />
            <hr />
            <h3>Planets</h3>
            <InfoList allItemNames={planetNames} filmItemUrls={filmInfo.planets} itemType={'planet'} />
            <hr />
            <h3>Species</h3>
            <InfoList allItemNames={speciesNames} filmItemUrls={filmInfo.species} itemType={'species'} />
            <hr />
            <h3>Vehicles</h3>
            <InfoList allItemNames={vehicleNames} filmItemUrls={filmInfo.vehicles} itemType={'vehicle'} />
            <hr />
            <h3>Starships</h3>
            <InfoList allItemNames={starshipNames} filmItemUrls={filmInfo.starships} itemType={'starship'} />
            <p>Opening Crawl: {filmInfo.opening_crawl} </p>
        </main>
    )
}

export const getStaticProps = async (context) => {
    const filmRes = await fetch(`https://www.swapi.tech/api/films/${context.params.id}`)
    const film = await filmRes.json()
    const filmInfo = await film.result.properties

    const characterRes = await fetch(`https://www.swapi.tech/api/people?page=1&limit=100`)
    const characters = await characterRes.json()
    const characterNames = await characters.results

    const planetRes = await fetch(`https://www.swapi.tech/api/planets?page=1&limit=100`)
    const planets = await planetRes.json()
    const planetNames = await planets.results

    const speciesRes = await fetch(`https://www.swapi.tech/api/species?page=1&limit=100`)
    const species = await speciesRes.json()
    const speciesNames = await species.results

    const vehicleRes = await fetch(`https://www.swapi.tech/api/vehicles?page=1&limit=100`)
    const vehicles = await vehicleRes.json()
    const vehicleNames = await vehicles.results

    const starshipsRes = await fetch(`https://www.swapi.tech/api/starships?page=1&limit=100`)
    const starships = await starshipsRes.json()
    const starshipNames = await starships.results

    return {
        props: {
            filmInfo,
            characterNames,
            planetNames,
            speciesNames,
            vehicleNames,
            starshipNames
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://www.swapi.tech/api/films`)
    const films = await res.json()

    const filmIds = films.result.map(film => film.properties.episode_id)
    const paths = filmIds.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }

}

export default Film