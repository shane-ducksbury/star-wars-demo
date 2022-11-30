import Link from "next/link"
import InfoList from "../../../components/InfoList"

const Film = ({ filmInfo, characterNames, planetNames, speciesNames, vehicleNames, starshipNames }) => {

    return (
        <main>
            <Link href='/'>Back</Link>
            <h1>{filmInfo.title}</h1>
            <h2>Episode {filmInfo.episode_id}</h2>
            <h3>Director: {filmInfo.director} </h3>
            <h3>Producers: {filmInfo.producer} </h3>
            <h3>Release Date: {filmInfo.release_date} </h3>
            <h3>Characters</h3>
            <InfoList allItemNames={characterNames} filmItemUrls={filmInfo.characters} />
            <h3>Planets</h3>
            <InfoList allItemNames={planetNames} filmItemUrls={filmInfo.planets} />
            <h3>Species</h3>
            <InfoList allItemNames={speciesNames} filmItemUrls={filmInfo.species} />
            <h3>Vehicles</h3>
            <InfoList allItemNames={vehicleNames} filmItemUrls={filmInfo.vehicles} />
            <h3>Starships</h3>
            <InfoList allItemNames={starshipNames} filmItemUrls={filmInfo.starships} />
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