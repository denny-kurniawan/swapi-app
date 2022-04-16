import { useContext, useEffect } from "react"
import Header from "../components/Header"
import FilmContext from "../context/FilmContext"
import { fetchFilms } from "../api/fetchData"
import FilmCard from "../components/FilmCard"
import Container from 'react-bootstrap/Container'
import Footer from "../components/Footer"

const Film = () => {
  const { setFilms } = useContext(FilmContext)

  useEffect(() => {
    const getFilm = async () => {
      const res = await fetchFilms()
      setFilms(res)
    }

    getFilm()
    // eslint-disable-next-line
  }, [])


  return (
    <>
      <Header />
      <Container className="d-flex flex-wrap justify-content-center my-5">
        <FilmCard />
      </Container>
      <Footer />
    </>
  )
}

export default Film