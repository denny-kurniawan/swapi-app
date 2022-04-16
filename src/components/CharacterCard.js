import { useContext } from "react"
import CharacterContext from "../context/CharacterContext"
import Card from 'react-bootstrap/Card'
import ReactLoading from 'react-loading'

const CharacterCard = () => {
  const { characters } = useContext(CharacterContext)

  return (
    <>
      {
        characters.length > 0 ?
        characters.map((character, index) => {
            const { name, height, mass, birth_year, gender, hair_color, skin_color } = character
            return (
              <Card className="w-25" key={index}>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Gender: {gender}</Card.Text>
                  <Card.Text>Birth Year: {birth_year}</Card.Text>
                  <Card.Text>Height: {height} cm</Card.Text>
                  <Card.Text>Mass: {mass} kg</Card.Text>
                  <Card.Text>Hair Color: {hair_color}</Card.Text>
                  <Card.Text>Skin Color: {skin_color}</Card.Text>
                </Card.Body>
              </Card>
            )}) : <ReactLoading type="spin" color='black' />
      }
    </>
  )
}

export default CharacterCard