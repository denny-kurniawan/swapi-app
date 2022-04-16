import { useContext } from "react"
import SpeciesContext from "../context/SpeciesContext"
import Card from 'react-bootstrap/Card'
import ReactLoading from 'react-loading'

const SpeciesCard = () => {
  const { species } = useContext(SpeciesContext)

  return (
    <>
      {
        species.length > 0 ?
        species.map((character, index) => {
            const { name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, language } = character
            return (
              <Card className="w-50" key={index}>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Classification: {classification}</Card.Text>
                  <Card.Text>Designation: {designation}</Card.Text>
                  <Card.Text>Average Height: {average_height} cm</Card.Text>
                  <Card.Text>Skin Colors: {skin_colors}</Card.Text>
                  <Card.Text>Hair Colors: {hair_colors}</Card.Text>
                  <Card.Text>Eye Colors: {eye_colors}</Card.Text>
                  <Card.Text>Average Lifespan: {average_lifespan}</Card.Text>
                  <Card.Text>Language: {language}</Card.Text>
                </Card.Body>
              </Card>
            )}) : <ReactLoading type="spin" color='black' />
      }
    </>
  )
}

export default SpeciesCard