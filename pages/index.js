import Head from 'next/head'
import Image from 'next/image'
import FilmList from '../components/FilmList'
import styles from '../styles/Home.module.css'

export default function Home({ films }) {
  const allFilms = films.result
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Star Wars Films</h1>
      <FilmList allFilms={allFilms} />

    </div>
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