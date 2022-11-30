const Film = ({ filmInfo }) => {
    // const filmInfo = film.result
    // console.log(filmInfo)
    return (
        <main>
            <h1>{filmInfo.title}</h1>
            <h2>Episode {filmInfo.episode_id}</h2>
            <h3>Director: {filmInfo.director} </h3>
            <h3>Producers: {filmInfo.producer} </h3>
            <h3>Release Date: {filmInfo.release_date} </h3>
            <p>Opening Crawl: {filmInfo.opening_crawl} </p>
        </main>
    )
}

export const getStaticProps = async (context) => {
    const filmRes = await fetch(`https://www.swapi.tech/api/films/${context.params.id}`)
    const film = await filmRes.json()
    const filmInfo = await film.result.properties

    return {
        props: {
            filmInfo,
            // characterRes
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