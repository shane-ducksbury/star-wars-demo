import Head from 'next/head'
import FilmList from '../components/FilmList'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

export default function Home({ films }) {
    const allFilms = films.result
    return (
        <main>
            <Head>
                <title>Star Wars Encyclopedia</title>
                <meta name="description" content="An encyclopedia of Star Wars content" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.logoHero}>
                <h3>The</h3>
                <Image src={'/img/Star_Wars_Yellow_Logo.svg'} width={320} height={137} alt='The Star Wars Logo' />
                <h3>Encyclopedia</h3>
            </div>
            <FilmList allFilms={allFilms} />
        </main>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://www.swapi.tech/api/films`)
    const films = await res.json()

    return {
        props: {
        films
        }
    }
}