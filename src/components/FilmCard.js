import { useContext } from "react"
import FilmContext from "../context/FilmContext"
import Card from 'react-bootstrap/Card'
import ReactLoading from 'react-loading'

const FilmCard = () => {
  const { films } = useContext(FilmContext)

  return (
    <>
      {
        films.length > 0 ?
          films.map((film, index) => {
            const { title, opening_crawl, director, producer } = film
            return (
              <Card className="w-50" key={index}>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{opening_crawl}</Card.Text>
                  <Card.Text>Director: {director}</Card.Text>
                  <Card.Text>Producer: {producer}</Card.Text>
                </Card.Body>
              </Card>
            )}) : <ReactLoading type="spin" color='black' />
      }
    </>
  )
}

export default FilmCard