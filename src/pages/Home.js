import Header from "../components/Header"
import { FaFilm, FaUser, FaQuestion } from 'react-icons/fa'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Header />
      <Container className="d-flex align-items-center" style={{ height: '80vh' }}>
        
        <Container className="d-flex flex-column align-items-center">
          <Link className="d-flex flex-column align-items-center text-dark text-decoration-none" to='/film'>
            <FaFilm size='10em' title='Films' />
            <h1>Films</h1>
          </Link>
        </Container>
        
        <Container className="d-flex flex-column align-items-center">
          <Link className="d-flex flex-column align-items-center text-dark text-decoration-none" to='/character'>
            <FaUser size='10em' title='Characters' />
            <h1>Characters</h1>
          </Link>
        </Container>
        
        <Container className="d-flex flex-column align-items-center">
          <Link className="d-flex flex-column align-items-center text-dark text-decoration-none" to='/species'>
            <FaQuestion size='10em' title='Species' />
            <h1>Species</h1>
          </Link>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default Home